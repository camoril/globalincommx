var state = {
  name: document.getElementById("name"),
  role: document.getElementById("role"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  ext: document.getElementById("ext"),
  mobile: document.getElementById("mobile"),
  waCountry: document.getElementById("waCountry"),
  waNumber: document.getElementById("waNumber"),
  pgp: document.getElementById("pgp")
};

var preview = document.getElementById("preview");
var htmlOutput = document.getElementById("htmlOutput");
var status = document.getElementById("status");

function buildTable() {
  var name = state.name.value.trim() || "Nombre Apellido";
  var role = state.role.value.trim() || "Puesto";
  var email = state.email.value.trim() || "correo@globalincom.com.mx";
  var phone = state.phone.value.trim();
  var ext = state.ext.value.trim();
  var mobile = state.mobile.value.trim() || "55 0000 0000";
  var waCountry = state.waCountry.value.trim() || "+52";
  var waNumber = state.waNumber.value.trim();
  var pgp = state.pgp.value.trim();

  var extText = ext ? " Ext. " + ext : "";

  var wa = buildWhatsappLink(waCountry, waNumber);

  var lines = [
    "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"font-family: Arial, Helvetica, sans-serif; font-size: 11px; line-height: 15px; color: #333333;\">",
    "  <tr>",
    "    <td style=\"vertical-align: middle; padding-right: 10px;\">",
    "      <img src=\"https://globalincom.com.mx/img/logo.svg\" alt=\"GlobalIncom Logo\" width=\"40\" height=\"40\" style=\"display: block; border: none; outline: none;\">",
    "    </td>",
    "    <td style=\"vertical-align: middle; padding-right: 15px;\">",
    "      <span style=\"font-weight: bold; font-size: 13px; color: #000000; display: block;\">" + name + "</span>",
    "      <span style=\"font-weight: normal; color: #555555; display: block; padding-bottom: 5px;\">" + role + "</span>",
    "    </td>",
    "    <td style=\"border-right: 1px solid #CCCCCC; padding: 0 15px 0 0;\"></td>",
    "    <td style=\"padding-left: 15px;\">"
  ];
  if (phone) {
    lines.push("      <span style=\"font-weight: bold; color: #555555;\">Tel. </span>" + phone + extText + "<br>");
  }
  lines.push(
    "      <span style=\"font-weight: bold; color: #555555;\">Cel. </span><a href=\"" + wa + "\" style=\"color: #0070c0; text-decoration: none;\">" + mobile + "</a><br>",
    "      <span style=\"font-weight: bold; color: #555555;\">Email. </span><a href=\"mailto:" + email + "\" style=\"color: #0070c0; text-decoration: none;\">" + email + "</a>"
  );
  if (pgp) {
    lines.push("      <br><span style=\"font-weight: bold; color: #555555;\">Key. </span><a href=\"" + pgp + "\" style=\"color: #0070c0; text-decoration: none;\">PGP</a>");
  }
  lines.push(
    "    </td>",
    "  </tr>",
    "</table>"
  );
  return lines.join("\n");
}

function buildWhatsappLink(countryCode, phoneNumber) {
  var cc = String(countryCode || "").replace(/\D/g, "");
  var number = String(phoneNumber || "").replace(/\D/g, "");
  if (!cc && !number) {
    return "https://wa.me/";
  }
  return "https://wa.me/" + cc + number;
}

function buildSignatureHtml(tableHtml) {
  return [
    "<!DOCTYPE html>",
    "<html>",
    "<head>",
    "  <meta charset=\"UTF-8\">",
    "  <title>Firma GlobalIncom</title>",
    "</head>",
    "<body>",
    tableHtml,
    "</body>",
    "</html>"
  ].join("\n");
}

function update() {
  var tableHtml = buildTable();
  htmlOutput.value = tableHtml;
  preview.innerHTML = tableHtml;
}

function setStatus(message) {
  status.textContent = message;
}

function copyHtml() {
  var html = htmlOutput.value;
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    setStatus("No se pudo copiar. Selecciona y copia manualmente.");
    return;
  }

  navigator.clipboard.writeText(html).then(function () {
    setStatus("HTML copiado al portapapeles.");
  }).catch(function () {
    setStatus("No se pudo copiar. Selecciona y copia manualmente.");
  });
}

function copySignature() {
  var html = htmlOutput.value;
  if (!navigator.clipboard || !window.ClipboardItem) {
    setStatus("No se pudo copiar la firma. Usa Copiar HTML.");
    return;
  }

  var blob = new Blob([html], { type: "text/html" });
  var item = new ClipboardItem({ "text/html": blob });
  navigator.clipboard.write([item]).then(function () {
    setStatus("Firma copiada. Pega directo en Outlook.");
  }).catch(function () {
    setStatus("No se pudo copiar la firma. Usa Copiar HTML.");
  });
}

function copyFullHtml() {
  var tableHtml = buildTable();
  var html = buildSignatureHtml(tableHtml);
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    setStatus("No se pudo copiar. Selecciona y copia manualmente.");
    return;
  }

  navigator.clipboard.writeText(html).then(function () {
    setStatus("HTML completo copiado al portapapeles.");
  }).catch(function () {
    setStatus("No se pudo copiar. Selecciona y copia manualmente.");
  });
}

for (var key in state) {
  if (Object.prototype.hasOwnProperty.call(state, key)) {
    state[key].addEventListener("input", update);
  }
}

document.getElementById("copyHtml").addEventListener("click", copyHtml);
document.getElementById("copySignature").addEventListener("click", copySignature);
document.getElementById("copyFullHtml").addEventListener("click", copyFullHtml);

update();
