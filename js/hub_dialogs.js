/**
 * hub_dialogs.js — LAB_RPG Suite Unificada
 * Guion de diálogos del JTP en el Hall Principal del Laboratorio,
 * escenas de retorno, sellado de la Libreta Universitaria y festejo final.
 */

window.HubDialogs = {
  characters: {
    jtp: {
      name: 'El JTP (Profe de TP)',
      role: 'Jefe de Trabajos Prácticos · Mate y Sello en mano',
      color: '#ffd166'
    },
    ayudante: {
      name: 'Ayudante de Primera',
      role: 'Narrador · Guía de la Cátedra de Fisicoquímica',
      color: '#7bdff2'
    },
    alerta: {
      name: '¡EVENTO DE LABORATORIO!',
      role: 'Aviso Crítico',
      color: '#ff5964'
    }
  },

  welcome: {
    speaker: 'jtp',
    mood: 'mate',
    text: '«¡Qué hacés, fiera! ¡Qué alegría verte por el laboratorio! Pasá, dejá la mochila en el casillero y ponete el guardapolvo y las gafas de seguridad. Hoy tenemos jornada doble en la cátedra de Fisicoquímica: en la Mesada 1 tenés "El Desafío de Poggendorff" (Pila de Daniell por Oposición) y en la Mesada 2 tenés "La Inversión de la Sacarosa" (Cinética por Polarimetría). ¿Por cuál de las dos aventuras querés arrancar?»'
  },

  whichFirstAdvice: {
    speaker: 'jtp',
    mood: 'explicando',
    text: '«¡Cualquiera de los dos está perfecto, che! Pero si querés ir en orden de elegancia termodinámica, arrancate con la Misión 1 de Poggendorff: ahí vas a cablear el potenciómetro y medir la FEM con corriente neta cero (i₀ = 0) para ver cómo se cumple la aditividad de potenciales y la ley de Nernst. Después te vas a la Misión 2 a ver cómo los protones del HCl rompen la sacarosa y le dan vuelta el signo a la rotación óptica. ¡Elegí la que más te llame la atención!»'
  },

  returnAfterTp1: {
    speaker: 'jtp',
    mood: 'feliz',
    text: '«¡Impecable laburo con el potenciómetro de oposición, colega! Comprobaste la aditividad de potenciales y la recta de Nernst te dio una pinturita. ¡CLAC! Ya tenés el sello oficial del TP 1 estampado en tu Libreta Universitaria. Tomate un mate de descanso... y cuando estés listo, pasate a la Mesada 2 para liquidar "La Inversión de la Sacarosa".»'
  },

  returnAfterTp2: {
    speaker: 'jtp',
    mood: 'feliz',
    text: '«¡Hermosa esa serie cinética de 20 puntos y la captura de α_∞! El cruce por cero cuando la fructosa dio vuelta la rotación fue una obra de arte fisicoquímica. ¡CLAC! Sello del TP 2 estampado con éxito en tu Libreta Universitaria. Si todavía te falta la Misión 1, dale que el potenciómetro de Poggendorff te está esperando.»'
  },

  allCompletedFinale: {
    speaker: 'jtp',
    mood: 'feliz',
    text: '«¡ATENCIÓN TODO EL LABORATORIO! ¡Dejen de pipetear un segundo! Nuestro colega acá presente acaba de completar LA TOTALIDAD de los Trabajos Prácticos de Fisicoquímica con precisión milimétrica, sin quemar el galvanómetro y sin volcar una sola gota de ácido. ¡MATERIA REGULARIZADA CON DIPLOMA DE HONOR! Mirá cómo brillan los dos sellos en tu Libreta Universitaria. ¡Felicitaciones, fiera!»'
  },

  returnMidway: {
    speaker: 'jtp',
    mood: 'mate',
    text: '«Tranqui, che, nadie te corre. Tomate un respiro en el Hall Principal, revisá tu Libreta Universitaria y cuando quieras volvemos a las mesadas a seguir midiendo.»'
  }
};
