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
