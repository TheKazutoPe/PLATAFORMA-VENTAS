// Todo lo que cambia entre una oferta y otra vive aquí. Edita este archivo y recarga la página.
window.VENTAS_CONFIG = {
  producto: "Control de Asistencia",
  lema: "Asistencia biométrica, picking y control de personal en un solo lugar.",
  color: "#4F46E5",

  // Número de WhatsApp con código de país y sin signos. Ej.: 51987654321
  whatsapp: "51900000000",
  correo: "ventas@tuempresa.com",

  // URL de la demo en vivo (la instalación de ejemplo). Vacío = se oculta el botón.
  demoUrl: "https://control-de-asistencia-hazel.vercel.app",

  // Video del hero (mp4 corto, sin audio, ~15 s). Ej.: "video/demo.mp4". Vacío = animación en vivo.
  videoUrl: "",
  videoPoster: "",

  // Capturas de la plataforma. Guarda las imágenes en la carpeta img/ con estos nombres
  // (o cambia las rutas). Las que no existan se omiten; si no hay ninguna, la sección se oculta.
  // Usa capturas con datos de ejemplo: no muestres personal real de un cliente.
  capturas: [
    { tipo: "en-vivo", img: "img/en-vivo.png",      titulo: "En vivo",          desc: "Quién llegó, quién falta y quién está en almuerzo, al instante." },
    { img: "img/kiosco.png",       titulo: "Kiosco de marcación", desc: "Reconocimiento facial o DNI desde una tablet en la entrada." },
    { img: "img/picking.png",      titulo: "Picking diario",    desc: "Control de la operación día a día con Excel por rango de fechas." },
    { img: "img/ausentismo.png",   titulo: "Ausentismo",        desc: "Indicadores para detectar patrones antes de que afecten la operación." },
    { img: "img/planilla.png",     titulo: "Planilla y pagos",  desc: "Asistencia lista para el cierre de mes." },
    { img: "img/personal.png",     titulo: "Personal",          desc: "Censo del personal y carga masiva desde Excel." },
  ],

  moneda: "S/",
  // PRECIOS DE EJEMPLO: reemplázalos por los tuyos. precio: null muestra "Cotizar".
  planes: [
    {
      nombre: "Inicial",
      para: "Equipos pequeños que empiezan a ordenar su asistencia",
      precio: 199,
      periodo: "al mes",
      colaboradores: "Hasta 50 colaboradores",
      destacado: false,
      incluye: [
        "Marcación por rostro o DNI",
        "Centro de Control en vivo",
        "Asistencia general y ausentismo",
        "Exportación a Excel",
        "Soporte por WhatsApp",
      ],
    },
    {
      nombre: "Profesional",
      para: "Operaciones con turnos, áreas y supervisores",
      precio: 449,
      periodo: "al mes",
      colaboradores: "Hasta 250 colaboradores",
      destacado: true,
      incluye: [
        "Todo lo del plan Inicial",
        "Picking diario y rotación",
        "Planilla y pagos",
        "Carga masiva del personal",
        "App para tablet (APK)",
        "Roles y permisos por supervisor",
      ],
    },
    {
      nombre: "Empresa",
      para: "Varias sedes, marca propia y necesidades a medida",
      precio: null,
      periodo: "",
      colaboradores: "Colaboradores ilimitados",
      destacado: false,
      incluye: [
        "Todo lo del plan Profesional",
        "Marca blanca con tu logo y colores",
        "Instalación dedicada por cliente",
        "Integraciones a medida",
        "Capacitación y acompañamiento",
      ],
    },
  ],
};
