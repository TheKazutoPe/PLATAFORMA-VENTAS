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
    { tipo: "en-vivo", img: "img/en-vivo.jpg",      titulo: "En vivo",          desc: "Quién llegó, quién falta y quién está en almuerzo, al instante.",
      notas: [{ x: 70, y: 21, t: "Indicadores en tiempo real" }, { x: 66, y: 62, t: "Presentes por zona de picking" }, { x: 80, y: 90, t: "Exporta a Excel en 1 clic" }] },
    { img: "img/kiosco.jpg",       titulo: "Kiosco de marcación", desc: "App para tablet en la entrada: el colaborador marca ingreso, almuerzo o salida con su rostro.",
      notas: [{ x: 50, y: 20, t: "Un toque para marcar" }, { x: 50, y: 72, t: "Ingreso · Almuerzo · Salida" }, { x: 17, y: 93, t: "Registro biométrico" }] },
    { img: "img/picking.jpg",      titulo: "Picking diario",    desc: "Control de la operación día a día con Excel por rango de fechas.",
      notas: [{ x: 45, y: 35, t: "Filtra por turno y supervisor" }, { x: 55, y: 78, t: "Indicadores del día" }] },
    { img: "img/ausentismo.png",   titulo: "Ausentismo",        desc: "Indicadores para detectar patrones antes de que afecten la operación." },
    { img: "img/planilla.png",     titulo: "Planilla y pagos",  desc: "Asistencia lista para el cierre de mes." },
    { img: "img/personal.jpg",     titulo: "Personal",          desc: "Censo del personal y carga masiva desde Excel.",
      notas: [{ x: 80, y: 33, t: "Cobertura biométrica" }, { x: 52, y: 80, t: "Ficha por colaborador" }] },
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
