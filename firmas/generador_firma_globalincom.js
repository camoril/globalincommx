// ============================================
// CATALOGO DE EMPLEADOS (sincronizado con vCard)
// ============================================
var employeeCatalog = {
  "rosa-vejero": {
    fullName: "Rosa Maria Vejero",
    title: "Asistente Ejecutiva",
    email: "rosad@globalincom.com.mx",
    phone: "+525586887461",
    mobile: "5586887461"
  },
  "ricardo-rangel": {
    fullName: "Ricardo Rangel Vazquez",
    title: "Director Comercial",
    email: "rrangel@globalincom.com.mx",
    phone: "+525544718091",
    mobile: "5544718091"
  },
  "sergio-huerta": {
    fullName: "Sergio Ivan Huerta Luna",
    title: "Director General / CEO",
    email: "shuerta@globalincom.com.mx",
    phone: "+525515108044",
    mobile: "5515108044"
  },
  "ernesto-pineda": {
    fullName: "Ernesto Pineda Batalla",
    title: "Ingenieria y Desarrollo",
    email: "ernesto.p@globalincom.com.mx",
    phone: "+525530434222",
    mobile: "5530434222"
  },
  "aldo-ruiz": {
    fullName: "Aldo Raul Ruiz Castro",
    title: "Ingeniería y Soporte Técnico",
    email: "aldor@globalincom.com.mx",
    phone: "+525529629378",
    mobile: "5529629378"
  },
  "ricardo-fernandez": {
    fullName: "Ricardo Fernandez Dominguez",
    title: "Director de Operaciones",
    email: "rfernandez@globalincom.com.mx",
    phone: "+525520991583",
    mobile: "5520991583"
  },
  "luis-romero": {
    fullName: "Luis Miguel Romero Solis",
    title: "Ingeniería y Redes",
    email: "lromero@globalincom.com.mx",
    phone: "+525575080204",
    mobile: "5575080204"
  },
  "graciela-gonzalez": {
    fullName: "Graciela Gonzalez Mejia",
    title: "Gerente de Operaciones",
    email: "graciela.g@globalincom.com.mx",
    phone: "+525578880782",
    mobile: "5578880782"
  }
};

// Estado de la aplicacion - solo campos necesarios
var state = {
  name: document.getElementById("name"),
  role: document.getElementById("role"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  ext: document.getElementById("ext"),
  mobile: document.getElementById("mobile"),
  vcardSlug: document.getElementById("vcardSlug")
};

// Elemento del selector de empleado
var employeeSelect = document.getElementById("employeeSelect");

// Elementos adicionales
var enableVcard = document.getElementById("enableVcard");
var enableGpg = document.getElementById("enableGpg");
var vcardField = document.getElementById("vcardField");
var gpgField = document.getElementById("gpgField");
var vcardPreview = document.getElementById("vcardPreview");
var gpgPreview = document.getElementById("gpgPreview");

var preview = document.getElementById("preview");
var htmlOutput = document.getElementById("htmlOutput");
var toastEl = document.getElementById("toast");

// Constantes
var VCARD_BASE_URL = "https://globalincom.com.mx/vcard/";
var GPG_BASE_URL = "https://globalincom.com.mx/gpg/";

// ============================================
// UTILIDADES
// ============================================

/**
 * Extrae solo los digitos de un string (elimina espacios, guiones, parentesis, signos, etc.)
 * Ejemplo: "+52 55 3043-4222" => "525530434222"
 */
function extractDigits(str) {
  return String(str || "").replace(/\D/g, "");
}

/**
 * Construye el link de WhatsApp a partir del numero de celular
 * Auto-detecta si el numero incluye codigo de pais (10+ digitos)
 * Si solo tiene 10 digitos, asume Mexico (+52)
 */
function buildWhatsappLink(mobileNumber) {
  var digits = extractDigits(mobileNumber);
  
  if (!digits) {
    return "https://wa.me/";
  }
  
  // Si tiene 10 digitos, es un numero de Mexico sin codigo de pais
  if (digits.length === 10) {
    return "https://wa.me/52" + digits;
  }
  
  // Si tiene 11 o mas digitos, se asume que ya incluye el codigo de pais
  return "https://wa.me/" + digits;
}

/**
 * Construye la URL de vCard a partir del slug del empleado
 * @param {string} slug - Slug del empleado (ej: ernesto-pineda)
 * @returns {string} URL completa de vCard
 */
function buildVcardUrl(slug) {
  if (!slug || !slug.trim()) {
    return "";
  }
  return VCARD_BASE_URL + "?employee=" + encodeURIComponent(slug.trim());
}

/**
 * Construye la URL de GPG a partir del slug del empleado
 * @param {string} slug - Slug del empleado (ej: ernesto-pineda)
 * @returns {string} URL completa de GPG
 */
function buildGpgUrl(slug) {
  if (!slug || !slug.trim()) {
    return "";
  }
  return GPG_BASE_URL + encodeURIComponent(slug.trim()) + ".asc";
}

/**
 * Genera un slug a partir del nombre completo
 * Convierte a minusculas, reemplaza espacios con guiones, elimina caracteres especiales
 * @param {string} fullName - Nombre completo
 * @returns {string} Slug generado
 */
function generateSlugFromName(fullName) {
  return fullName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    .replace(/[^a-z0-9\s-]/g, "")    // Solo letras, numeros, espacios y guiones
    .trim()
    .replace(/\s+/g, "-")            // Reemplazar espacios con guiones
    .replace(/-+/g, "-");            // Evitar guiones multiples
}

/**
 * Muestra una notificacion toast
 * @param {string} message - Mensaje a mostrar
 * @param {string} type - Tipo: 'success', 'error', 'info'
 * @param {number} duration - Duracion en ms (default 3000)
 */
function showToast(message, type, duration) {
  type = type || "info";
  duration = duration || 3000;
  
  toastEl.textContent = message;
  toastEl.className = "toast " + type + " show";
  
  setTimeout(function() {
    toastEl.className = "toast";
  }, duration);
}

// ============================================
// GENERACION DE FIRMA
// ============================================

function buildTable() {
  var name = state.name.value.trim() || "Tu Nombre Aqui";
  var role = state.role.value.trim() || "Tu Puesto Aqui";
  var email = state.email.value.trim() || "tu.email@globalincom.com.mx";
  var phone = state.phone.value.trim();
  var ext = state.ext.value.trim();
  var mobile = state.mobile.value.trim() || "55 0000 0000";
  var vcardSlug = state.vcardSlug.value.trim();

  var extText = ext ? " Ext. " + ext : "";
  var wa = buildWhatsappLink(mobile);

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
  
  // Agregar vCard si esta habilitado
  if (enableVcard.checked && vcardSlug) {
    var vcardUrl = buildVcardUrl(vcardSlug);
    lines.push("      <br><span style=\"font-weight: bold; color: #555555;\">vCard. </span><a href=\"" + vcardUrl + "\" style=\"color: #0070c0; text-decoration: none;\">Contacto</a>");
  }
  
  // Agregar GPG si esta habilitado (usa el mismo slug de vCard)
  if (enableGpg.checked && vcardSlug) {
    var gpgUrl = buildGpgUrl(vcardSlug);
    lines.push("      <br><span style=\"font-weight: bold; color: #555555;\">Key. </span><a href=\"" + gpgUrl + "\" style=\"color: #0070c0; text-decoration: none;\">GPG</a>");
  }
  
  lines.push(
    "    </td>",
    "  </tr>",
    "</table>"
  );
  
  return lines.join("\n");
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
  updatePreviews();
}

/**
 * Actualiza las vistas previas de vCard y GPG
 */
function updatePreviews() {
  var slug = state.vcardSlug.value.trim();
  
  // Actualizar preview de vCard
  if (slug && enableVcard.checked) {
    vcardPreview.textContent = buildVcardUrl(slug);
  } else if (slug) {
    vcardPreview.textContent = buildVcardUrl(slug);
  } else {
    vcardPreview.textContent = "";
  }
  
  // Actualizar preview de GPG
  if (slug && enableGpg.checked) {
    gpgPreview.textContent = buildGpgUrl(slug);
  } else if (slug) {
    gpgPreview.textContent = buildGpgUrl(slug);
  } else {
    gpgPreview.textContent = "";
  }
}

// ============================================
// FUNCIONES DE COPIADO
// ============================================

function copyHtml() {
  var html = htmlOutput.value;
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    showToast("No se pudo copiar. Selecciona y copia manualmente.", "error");
    return;
  }

  navigator.clipboard.writeText(html).then(function () {
    showToast("HTML copiado al portapapeles", "success");
  }).catch(function () {
    showToast("No se pudo copiar. Selecciona y copia manualmente.", "error");
  });
}

function copySignature() {
  var html = htmlOutput.value;
  if (!navigator.clipboard || !window.ClipboardItem) {
    showToast("No se pudo copiar la firma. Usa Copiar HTML.", "error");
    return;
  }

  var blob = new Blob([html], { type: "text/html" });
  var item = new ClipboardItem({ "text/html": blob });
  navigator.clipboard.write([item]).then(function () {
    showToast("Firma copiada. Pega directo en Outlook", "success");
  }).catch(function () {
    showToast("No se pudo copiar la firma. Usa Copiar HTML.", "error");
  });
}

function copyFullHtml() {
  var tableHtml = buildTable();
  var html = buildSignatureHtml(tableHtml);
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    showToast("No se pudo copiar. Selecciona y copia manualmente.", "error");
    return;
  }

  navigator.clipboard.writeText(html).then(function () {
    showToast("HTML completo copiado al portapapeles", "success");
  }).catch(function () {
    showToast("No se pudo copiar. Selecciona y copia manualmente.", "error");
  });
}

// ============================================
// PROBAR WHATSAPP
// ============================================

function testWhatsapp() {
  var mobile = state.mobile.value.trim();
  var link = buildWhatsappLink(mobile);
  
  if (!mobile || extractDigits(mobile).length < 10) {
    showToast("Ingresa un numero de celular valido (minimo 10 digitos)", "error");
    return;
  }
  
  // Abrir el link en una nueva pestaña
  window.open(link, "_blank");
  showToast("Abriendo WhatsApp...", "info", 2000);
}

// ============================================
// EVENT LISTENERS
// ============================================

// Actualizar firma en tiempo real
for (var key in state) {
  if (Object.prototype.hasOwnProperty.call(state, key)) {
    state[key].addEventListener("input", update);
  }
}

// Checkboxes para mostrar/ocultar campos
enableVcard.addEventListener("change", function() {
  vcardField.classList.toggle("visible", this.checked);
  update();
});

enableGpg.addEventListener("change", function() {
  gpgField.classList.toggle("visible", this.checked);
  update();
});

// Auto-generar slug cuando cambia el nombre
state.name.addEventListener("input", function() {
  // Solo auto-generar si el campo vcardSlug esta vacio o si nunca se ha editado manualmente
  var currentSlug = state.vcardSlug.value.trim();
  var generatedSlug = generateSlugFromName(this.value);
  
  // Si el slug actual coincide con el generado anteriormente o esta vacio, actualizarlo
  if (!currentSlug || currentSlug === state.vcardSlug.dataset.lastAutoGenerated) {
    state.vcardSlug.value = generatedSlug;
    state.vcardSlug.dataset.lastAutoGenerated = generatedSlug;
    update();
  }
});

// Botones de copiado
document.getElementById("copyHtml").addEventListener("click", copyHtml);
document.getElementById("copySignature").addEventListener("click", copySignature);
document.getElementById("copyFullHtml").addEventListener("click", copyFullHtml);

// Boton probar WhatsApp
document.getElementById("testWhatsapp").addEventListener("click", testWhatsapp);

// ============================================
// SELECTOR DE EMPLEADO - LLENAR DROPDOWN
// ============================================

/**
 * Llena el dropdown de empleados con los datos del catalogo
 */
function populateEmployeeDropdown() {
  // Limpiar opciones existentes (excepto la primera)
  while (employeeSelect.options.length > 1) {
    employeeSelect.remove(1);
  }
  
  // Agregar cada empleado del catalogo
  Object.keys(employeeCatalog).forEach(function(slug) {
    var emp = employeeCatalog[slug];
    var option = document.createElement("option");
    option.value = slug;
    option.textContent = emp.fullName + " - " + emp.title;
    employeeSelect.add(option);
  });
}

/**
 * Autocompleta los campos del formulario con los datos del empleado seleccionado
 * @param {string} slug - Slug del empleado seleccionado
 */
function autoFillFromEmployee(slug) {
  if (!slug || !employeeCatalog[slug]) {
    return;
  }
  
  var emp = employeeCatalog[slug];
  
  // Llenar los campos
  state.name.value = emp.fullName;
  state.role.value = emp.title;
  state.email.value = emp.email;
  state.phone.value = emp.phone;
  state.mobile.value = emp.mobile;
  state.vcardSlug.value = slug;
  
  // Marcar el checkbox de vCard como activado
  enableVcard.checked = true;
  vcardField.classList.add("visible");
  
  // Actualizar la vista previa
  update();
  
  showToast("Datos de " + emp.fullName + " cargados correctamente", "success", 2500);
}

// Event listener para el selector de empleado
employeeSelect.addEventListener("change", function() {
  autoFillFromEmployee(this.value);
});

// ============================================
// LIMPIAR FORMULARIO
// ============================================

/**
 * Limpia todos los campos del formulario y resetea el selector
 */
function clearForm() {
  // Resetear selector
  employeeSelect.value = "";
  
  // Limpiar campos
  state.name.value = "";
  state.role.value = "";
  state.email.value = "";
  state.phone.value = "";
  state.ext.value = "";
  state.mobile.value = "";
  state.vcardSlug.value = "";
  
  // Desmarcar checkboxes
  enableVcard.checked = false;
  enableGpg.checked = false;
  vcardField.classList.remove("visible");
  gpgField.classList.remove("visible");
  
  // Actualizar vista
  update();
  
  showToast("Formulario limpiado", "info", 2000);
}

// Boton limpiar formulario
document.getElementById("clearForm").addEventListener("click", clearForm);

// Inicializar
populateEmployeeDropdown();
update();
