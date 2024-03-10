const quizQuestions = [
    {
        "question": "La triada de Charcot de la Colangitis Aguda, incluye:",
        "options": [
            "Fiebre, ictericia e hipotensión", "Ictericia, hipotensión y dolor", "Fiebre, ictericia y confusión mental", "Dolor, ictericia y confusión mental", "Fiebre, dolor e ictericia"
        ],
        "answer": "Fiebre, dolor e ictericia",
        "imgs": "recursos/diciembre 2019/.png",
        "feedback": "Es la presentación clásica, y en caso de acompañarse de hipotensión y confusión mental se denomina pentada de Reynolds."
    },
    {
        "question": "Indique si la afirmación es Verdadera o Falsa. Los antiespasmódicos son parte fundamental del manejo del cólico renal:",
        "options": [
            "Falso", "Verdadero"
        ],
        "answer": "Falso",
        "feedback": "En general se manejan con AINES, opiáceos si el dolor es importante, y tamsulosina para favorecer su expulsión. Se deben evitar antiespasmódicos, pues retrasarán la eliminación del cálculo."
    },
    {
        "question": "Sobre los abscesos anorrectales, es INCORRECTO señalar que:",
        "options": [
            "El uso de antibióticos es parte fundamental del tratamiento.", "Según su extensión pueden ser perianales o isquiorrectales.", "Deben tenerse en cuenta etiologías menos habituales como la enfermedad de Crohn. ", "El 80% de los pacientes puede desarrollar a largo plazo una fístula.", "El manejo es quirúrgico y debe realizarse seguimiento por la alta tasa de recidiva."
        ],
        "answer": "El uso de antibióticos es parte fundamental del tratamiento.",
        "feedback": "El uso de antibióticos no está indicado en pacientes inmunocompetentes, pero debe considerarse en abscesos profundos, inmunosuprimidos, diabéticos, portadores de valvulopatía cardíaca, etc."
    },
    {
        "question": "Señale si la siguiente afirmación es Verdadera o Falsa: Es sugerente de hemorragia retroperitoneal el hematoma epigástrico.",
        "options": [
            "Falso", "Verdadero"
        ],
        "answer": "Falso",
        "feedback": "El hematoma retroperitoneal puede disecar planos manifestándose como equimosis periumbilical (signo de Cullen), equimosis en los flancos (signo de Grey-Turner), o llegar incluso hasta la zona genital manifestándose como hematoma escrotal. En otros casos puede comprimir el nervio femoral y manifestarse con síntomas neurológicos en las extremidades inferiores."
    },
    {
        "question": "¿Qué porcentaje aproximado de pacientes que consulta por dolor abdominal en el servicio de urgencia suele ser dado de alta sin diagnóstico específico?",
        "options": [
            "Menos del 5%", "Entre 5 y 10% ", "Entre el 10 y el 25%", "Más del 50%", "Entre el 25 y el 50%"
        ],
        "answer": "Entre el 25 y el 50%",
        "feedback": "De todas las consultas en servicio de urgencia por dolor abdominal, sólo el 10% requerirá admisión para cirugía de urgencia, mientras que entre un 25 y 50% de los casos será dado de alta sin un diagnóstico específico"
    },
    {
        "question": "El signo de Carnnet ayuda al diagnóstico de:",
        "options": [
            "Colecistitis Aguda", "Apendicitis Aguda", "Irritación local de la pared abdominal", "Pancreatitis Aguda", "Hernias de la pared abdominal"
        ],
        "answer": "Irritación local de la pared abdominal",
        "feedback": "El signo de Carnnet consiste en –una vez identificado el punto de mayor dolor- pedir al paciente que coloque los brazos cruzados sobre el tórax y se incorpore, pero sin sentarse completamente. El examinador mantiene la palpación sobre la zona dolorosa y si se produce el mismo o más dolor, la prueba es positiva para irritación de la pared abdominal a ese nivel, haciendo improbable una patología intraabdominal."
    },
    {
        "question": "El manejo habitual de una fluxión hemorroidal no incluye:",
        "options": [
            "Trombectomía", "Relajante muscular local", "Baños de asiento", "Analgésicos", "AINES"
        ],
        "answer": "Trombectomía",
        "feedback": "El manejo debe ser con reposo, baños de asiento, relajante muscular local y antiinflamatorio local, AINES y analgésicos. En algunos casos si puede tener concomitantemente trombosis en grado variable de los paquetes hemorroidales pero en estos casos es poco habitual se realice trombectomía."
    },
    {
        "question": "Ante un dolor abdominal desmesurado, ¿qué cuadros graves y potencialmente letales deben descartarse? Señale la alternativa INCORRECTA.",
        "options": [
            "Perforación de víscera hueca", "Isquemia mesentérica", "Disección Aórtica", "Embarazo ectópico", "Gastroenteritis Aguda"
        ],
        "answer": "Gastroenteritis Aguda",
        "feedback": "Si bien no existe una correlación entre la intensidad del dolor y la gravedad del cuadro subyacente, un dolor desmesurado deberá ponernos en alerta sobre diagnósticos potencialmente graves como son: perforación de víscera hueca, obstrucción intestinal, trastornos vasculares (isquemia mesentérica, disección aórtica, etc.), embarazo ectópico, entre otros."
    },
    {
        "question": "La Gangrena de Fournier, en general, no compromete testículos pues:",
        "options": [
            "Está causada por bacterias que no atacan los testículos.", "Es una fasceitis necrotizante que sólo compromete cara anterior del abdomen.", "Antes de comprometer testículos la mayoría de los pacientes ya están fallecidos.", "Los testículos tienen una irrigación diferente.", " El uso de antibióticos de amplio espectro precoz impide la progresión."
        ],
        "answer": "Los testículos tienen una irrigación diferente.",
        "feedback": "La gangrena de Fournier es una fasceitis necrotizante de la zona perianal que puede comprometer la zona genital y cara anterior del abdomen. En general no compromete testículos, por tener irrigación diferente."
    },
    {
        "question": "Señale si la siguiente afirmación es Verdadera o Falsa: Frente a un paciente con dolor epigástrico, el diagnóstico más probable es diverticulitis aguda.",
        "options": [
            "Falso", "Verdadero"
        ],
        "answer": "Falso",
        "feedback": "Si bien la Diverticulitis Aguda puede comprometer cualquier segmento del colon, la localización más frecuente de los divertículos -en Occidente- es el hemicolon izquierdo, siendo por lo mismo clásica la presentación con dolor en flanco o fosa iliaca izquierdas."
    },
    {
        "question": "La cirugía está indicada especialmente para pacientes:",
        "options": [
            "Alcohólicos y cirróticos", "Que presentan Sarcoma de Kaposi", "Con úlcera péptica", "Con sangrado diverticular que requieren cuatro o más unidades de transfusión con concentrados de glóbulos rojos durante un período de 24 horas.", "Intolerantes al Omeprazol"
        ],
        "answer": "Con sangrado diverticular que requieren cuatro o más unidades de transfusión con concentrados de glóbulos rojos durante un período de 24 horas.",
        "feedback": "La cirugía es la forma más agresiva de controlar el sangrado gastrointestinal y actualmente se realiza cuando el paciente está hemodinámicamente inestable o cuando la terapia endoscópica no está disponible, no es factible, no ha logrado identificar una fuente de sangrado, está contraindicada o no es tolerada. La cirugía generalmente está indicada para pacientes con sangrado diverticular que requieren cuatro o más unidades de transfusión con concentrados de glóbulos rojos durante un período de 24 horas."
    },
    {
        "question": "¿Cuál de las siguientes opciones es un hallazgo de alto riesgo en la endoscopia digestiva alta?",
        "options": [
            "Diverticulosis", "Lesión ulcerosa plana sin pigmentación ", "Sin gastropatía hipertensiva portal", "Estigma de hemorragia", "Desgarro de Mallory- Weis"
        ],
        "answer": "Estigma de hemorragia",
        "feedback": "El desarrollo de la endoscopia ha permitido tener la capacidad de visualizar los sitios de hemorragia en la mayoría de los casos de hemorragia digestiva. Esta información puede ser utilizada por el endoscopista para guiar la terapia y estratificar a los pacientes de acuerdo con su riesgo de nuevas hemorragias. Esto es particularmente cierto si se identifican varices esofágicas sangrantes."
    },
    {
        "question": "¿Cuáles de éstos son signos de hipocoagulabilidad en un paciente con hemorragia digestiva?",
        "options": [
            "Caput Medusae, Petequias, Purpura", "Petequias, Purpura, Telangiectasia", "Purpura, Caput Medusae, Telangiectasia", "Caput Medusae, Petequias, Telangiectasia", "Telangiectasia, distensión venosa yugular"
        ],
        "answer": "Petequias, Purpura, Telangiectasia",
        "feedback": "Se debe evaluar la esclerótica y la piel para detectar ictericia y los estigmas de una enfermedad vascular o un estado hipocoagulable (por ejemplo, Telangiectasia, púrpura, petequias, etc.)."
    },
    {
        "question": "En la fisiopatología de las varices esofágicas, ¿por qué aparecen, finalmente?",
        "options": [
            "Disminución del flujo sanguíneo esofágico", "Aumento de la postcarga", "Destrucción de las sinusoides hepáticas", "Aumenta la presión portal", "Infección por Helicobacter pylori"
        ],
        "answer": "Aumenta la presión portal",
        "feedback": "Las varices esofágicas están asociadas con una enfermedad hepática grave, en la que el tejido esclerótico reemplaza al parénquima hepático normal. Esto bloquea subsecuentemente el flujo sanguíneo, aumenta la presión portal, y por lo tanto, proporciona estímulo para la formación de la circulación colateral (es decir, varices)."
    },
    {
        "question": "Es correcto decir que:",
        "options": [
            "Los bloqueadores H2 han demostrado ser superiores a los IBP para prevenir el sangrado", "No se recomienda los IBP en el contexto de hemorragia GI aguda", "Tiene mejor evidencia el uso de sucralfate en la prevención de la hemorragia digestiva", "El omeprazol es la terapia de elección en los casos de ulcera péptica sangrante ", "Hay evidencia concluyente que los anti H2 detienen el sangrado."
        ],
        "answer": "El omeprazol es la terapia de elección en los casos de ulcera péptica sangrante ",
        "feedback": "Los inhibidores de la bomba de protones por ejemplo- Omeprazol han demostrado ser superiores a los medicamentos bloqueadores de H2 para prevenir el sangrado recurrente en pacientes con hemorragia digestiva alta, tanto en subaguda como crónica."
    },
    {
        "question": "Señale si la siguiente afirmación es verdadera o falsa:Ser menor de 60 años es una de las características de alto riesgo en la estratificación de los pacientes con hemorragias digestivas",
        "options": [
            "Falso", "Verdadero"
        ],
        "answer": "Falso",
        "feedback": "Tener una edad menor a 60 años, junto a muchas otras características, califica en principio como de bajo riesgo."
    },
    {
        "question": "En cuanto a la aspiración nasogástrica, es correcto señalar que:",
        "options": [
            "La aspiración nasogástrica es necesaria antes de realizar una endoscopia digestiva precoz", "La presencia de sangre en el aspirado generalmente se considera confirmación de hemorragia digestiva alta.", "Esta rotundamente contraindicada en todos los pacientes con sangrado digestivo", "Está 100 % apoyada en la evidencia", "Debe realizarse siempre en caso de hematemesis"
        ],
        "answer": "La presencia de sangre en el aspirado generalmente se considera confirmación de hemorragia digestiva alta.",
        "feedback": "La presencia de sangre en el aspirado generalmente se considera confirmación de hemorragia digestiva alta. Sin embargo, es posible tener un aspirado positivo en una hemorragia digestiva baja cuando hay una obstrucción intestinal concurrente."
    },
    {
        "question": "En el tratamiento inicial a los pacientes con hemorragia digestiva en el contexto de hemodinamia inestable, se puede decir que:",
        "options": [
            "Se debe iniciar una transfusión de sangre con glóbulos rojos empacados de tipo O positivo.", "Si el volumen de líquido se reemplaza con cristaloides, el paciente casi seguramente tendrá un empeoramiento de su anemia.", "La trasfusión de plaquetas está contraindicada ", "Si la anemia alcanza un nivel crítico, la capacidad de transporte de oxígeno de la sangre aumentará y el paciente puede desarrollar un infarto al miocardio", "Para muchos pacientes con hemorragia GI aguda y en curso, en particular los alcohólicos, se debe presumir una coagulopatía, por lo que no se le debe administrar plasma fresco congelado"
        ],
        "answer": "Si el volumen de líquido se reemplaza con cristaloides, el paciente casi seguramente tendrá un empeoramiento de su anemia.",
        "feedback": "Efectivamente, si el volumen de líquido se reemplaza con cristaloides, el paciente casi seguramente tendrá un empeoramiento de su anemia. Si esta anemia alcanza un nivel crítico, la capacidad de transporte de oxígeno de la sangre disminuirá aún más, por lo que los pacientes con enfermedad arterial coronaria preexistente, pueden desarrollar infarto de miocardio en este contexto."
    },
    {
        "question": "Entre las causas frecuentes de hemorragia digestiva alta se encuentra:",
        "options": [
            "Diverticulosis", "Hemorragia nasal", "Ulcera péptica", "Hemorroides", "Apendicitis"
        ],
        "answer": "Ulcera péptica",
        "feedback": "Las úlcera pépticas, gastritis erosivas y varices esofágicas son las causas más frecuentes de las hemorragias digestivas altas."
    },
    {
        "question": "Entre las causas no infecciosas de fiebre, podemos contar con la siguiente:",
        "options": [
            "Fractura de hueso largo", "Herida no suturada de cuero cabelludo", "Diabetes Mellitus descompensada", "Tromboembolismo pulmonar", "Aneurisma disecante de la Aorta"
        ],
        "answer": "Tromboembolismo pulmonar",
        "feedback": "Sólo se ha asociado este diagnóstico a la aparición de fiebre, sin que haya un cuadro infeccioso intercurrente."
    },
    {
        "question": "En un paciente de 78 años que presenta fiebre desde hace una semana, ¿cuáles causas infecciosas debemos evaluar?",
        "options": [
            "Amigdalitis, Neumonía, Diarrea", "Infección urinaria, Neumonía, Ulceras por presión infectadas", "Gastroenteritis, Diabetes Mellitus descompensada, Otitis ", "Tromboembolismo pulmonar, Neumonía, Gastroenteritis Aguda", "Deshidratación, bronquitis Aguda, meningitis"
        ],
        "answer": "Infección urinaria, Neumonía, Ulceras por presión infectadas",
        "feedback": "En los adultos mayores, las principales causas infecciosas de fiebre son las infecciones respiratorias, urinarias y de partes blandas."
    },
    {
        "question": "Los exámenes de laboratorio que deberían hacerse en un paciente con fiebre de origen desconocido en la urgencia, de 4 días de evolución, comprenden:",
        "options": [
            "Hemograma, proteína c reactiva", "Hemograma, procalcitonina, orina completa y urocultivo", "Hemograma, hemocultivos y proteína c reactiva ", "Hemograma, proteína C reactiva, orina completa, urocultivo.", "Hemograma, creatinina, ácido láctico, proteína c reactiva."
        ],
        "answer": "Hemograma, proteína C reactiva, orina completa, urocultivo.",
        "feedback": "Son los exámenes que han demostrado ser útiles en un paciente con fiebre de origen desconocido, de menos de 5 días de evolución."
    },
    {
        "question": "En una paciente embarazada, las enfermedades que rápidamente deben descartarse como causas más probables de fiebre son:",
        "options": [
            "Pielonefritis, corioamnionitis y respiratorias", "Infección urinaria, abscesos, gastroenteritis", "Otitis media aguda supurativa, faringo amigdalitis, meningitis", "Meningitis, influenza y diabetes mellitus descompensada", "Virosis inespecíficas, urinarias y abscesos."
        ],
        "answer": "Pielonefritis, corioamnionitis y respiratorias",
        "feedback": "Las causas más frecuentes de hospitalización de una paciente embarazada son la coriomanionitis, el aborto retenido, la pielonefritis y las infecciones respiratorias."
    },
    {
        "question": "",
        "options": [
            "", "", "", "", ""
        ],
        "answer": "",
        "imgs": "recursos/diciembre 2019/.png",
        "feedback": ""
    },
    {
        "question": "¿Cuál de estos, es un factor poblacional de riesgo en un paciente con fiebre?",
        "options": [
            "Sexo femenino", "Edad 80 años", "Obesidad mórbida", "Paciente post operado de apendicetomía hace tres semanas", "Paciente diabético"
        ],
        "answer": "Edad 80 años",
        "feedback": "El paciente añoso tiene una respuesta inmunitaria deprimida, por lo que siempre debe considerarse de alto riesgo al presentar fiebre, ya que puede ser la manifestación de un estadio tardío de infección."
    },
    {
        "question": "¿A cuál de estos pacientes le haría tratamiento ambulatorio de un cuadro febril, asociado a manejo sintomático?",
        "options": [
            "Paciente de 28 años, con tres días de fiebre, usuario de corticoides por Lupus Eritematoso Sistémico.", "Embarazada de 14 semanas con fiebre de dos días de evolución, cuyos exámenes demostraron la presencia de infección urinaria baja.", "Hombre de 57 años, con fiebre de 2 días de evolución, con test (+) para Influenza A.", "Viajero llegado de Brasil hace una semana que consulta por cuadro de 5 días de evolución de fiebre y mialgias.", "Paciente masculino de 89 años, postrado, con 2 días de fiebre, compromiso del sensorio y presencia de úlceras por presión en ambos talones."
        ],
        "answer": "Hombre de 57 años, con fiebre de 2 días de evolución, con test (+) para Influenza A.",
        "feedback": "Es un paciente que no tiene factores de riesgo asociados, y tiene diagnóstico de cuadro viral causante de la fiebre, además su fiebre ha evolucionado por un período en que sólo se justifica el tratamiento sintomático y la observación. ( ver algoritmo de actuación frente a paciente febril)."
    },
    {
        "question": "Si un paciente que hace tres semanas viene llegando de vacaciones en el Caribe presenta fiebre que ha durado 12 días, sin otras molestias, deberá siempre pensarse en:",
        "options": [
            "Neumonía", "Infección urinaria", "Meningitis bacteriana", "Malaria", "Salmomellosis"
        ],
        "answer": "Malaria",
        "feedback": "El aumento de los viajes internacionales ha permitido la aparición en Chile de enfermedades endémicas de zonas especiales, tales como la Malaria."
    },
    {
        "question": "La mejor evaluación de la temperatura central es:",
        "options": [
            "Temperatura timpánica", "Temperatura rectal", "Temperatura axilar", "Temperatura rectal y axilar", "De cualquier manera es igual"
        ],
        "answer": "Temperatura rectal",
        "feedback": "La medición de la temperatura rectal es la forma más certera para evaluar la temperatura central."
    },
    {
        "question": "Lo más importante siempre en el estudio de un paciente febril es:",
        "options": [
            "Saber si ha viajado recientemente", "Saber si tiene enfermedades concomitantes", "Realizar prontamente los exámenes de laboratorio que correspondan", "Realizar historia clínica acuciosa y examen físico acabado", "Tomar una Radiografía de tórax"
        ],
        "answer": "Realizar historia clínica acuciosa y examen físico acabado",
        "feedback": "Una historia clínica completa junto a un examen físico acabado y detallado permiten hacer un diagnóstico etiológico en un 80 % de los casos."
    },
    {
        "question": "La causa más frecuente de fiebre en la población general es:",
        "options": [
            "Infección viral", "Infección bacteriana", "Causas no infecciosas", "Inmunosupresión", "Metabólicas"
        ],
        "answer": "Infección viral",
        "feedback": "Dentro de las causas de fiebre de la población general, la mayoría son virales, luego las bacterianas y por último las no infecciosas."
    },
    {
        "question": "En un paciente con diarrea aguda con una exposición alimentaria de 2 horas previo al comienzo del cuadro, ¿cuál de los siguientes patógenos es más probable?",
        "options": [
            "Clostridium perfringens", "Norovirus", "Escherichia coli enterotoxigénica", "Giardia lamblia", "Staphylococcus aureus"
        ],
        "answer": "Staphylococcus aureus",
        "feedback": "De acuerdo con la tabla vista en clase y considerando el período de incubación de un cuadro, si éste es de menos de 6 horas las causas probables son toxinas preformadas de Staphylococcus aureus y Bacillus cereus"
    },
    {
        "question": "¿En qué caso está indicado el uso de antibióticos empíricos?",
        "options": [
            "Disentería", "Diarrea crónica", "Antecedente de hospitalización reciente", "Diarrea del viajero", "Deshidratación severa"
        ],
        "answer": "Deshidratación severa",
        "feedback": "Los antibióticos empíricos no están indicados salvo contadas excepciones. en pacientes con deshidratación severa se debe usar antibióticos de amplio espectro de forma temprana debido al mayor riesgo de infecciones invasivas y complicaciones infecciosas."
    },
    {
        "question": "¿En cuál de los siguientes casos NO es necesario realizar estudio microbiológico para un cuadro de diarrea aguda?",
        "options": [
            "Deshidratación significativa", "Diarrea sanguinolenta", "Edad avanzada", "Intolerancia oral", "Inmunosuprimido"
        ],
        "answer": "Intolerancia oral",
        "feedback": "En pacientes gravemente enfermos con deshidratación significativa, fiebre, diarrea sanguinolenta, inmunosuprimidos, uso reciente de antibióticos, edad avanzada, comorbilidades significativas u hospitalización, se debe realizar una muestra de heces para detectar agentes bacterianos."
    },
    {
        "question": "¿Cuál de los siguientes patógenos se debe sospechar ante una diarrea aguda con el antecedente de acampar recientemente?",
        "options": [
            "Norovirus", "Rotavirus", "Salmonella", "Giardia lamblia", "Clostridium difficile"
        ],
        "answer": "Giardia lamblia",
        "feedback": "La Giardia suele estar causada por ingesta de agua no tratada, lo que es compatible con el antecedente de haber estado acampando."
    },
    {
        "question": "¿Cuál es la duración máxima del tratamiento con loperamida para la diarrea aguda?",
        "options": [
            "1 mes", "24 horas", "7 días", "48 horas", "5 días"
        ],
        "answer": "48 horas",
        "feedback": "La indicación del uso de loperamida es: una dosis de carga de 4 mg, seguido de 2 mg con cada episodio de diarrea, con una dosis máxima de 12 a 16 mg, por un máximo de 48 horas."
    },
    {
        "question": "Señale si la siguiente afirmación es Verdadera o Falsa: En cuadros de diarrea aguda, los beneficios de los probióticos son específicos de ciertas cepas.",
        "options": [
            "Verdadero", "Falso"
        ],
        "answer": "Falso",
        "feedback": "Los metaanálisis concluyen que, con independencia de la cepa o cepas utilizadas; la dosis; la causa (bacteriana o vírica); la gravedad o el país de estudio, los probióticos son seguros y eficaces en reducir la duración (en 25 horas) y gravedad de la diarrea, además de prevenir la progresión de la forma aguda a la forma persistente."
    },
    {
        "question": "¿Cuál es el pilar del tratamiento de una diarrea aguda en el servicio de urgencias?",
        "options": [
            "Evitar los vómitos", "Uso de probióticos", "Hidratación", "Antibioticoterapia", "Disminuir el número de episodios de diarrea "
        ],
        "answer": "Hidratación",
        "feedback": "Lo más importante en la urgencia es la resolución o prevención de la deshidratación, según sea el caso."
    },
    {
        "question": "¿Cual es el cuadro clínico clásico del Vibrio cholerae?",
        "options": [
            "Aparición repentina de vómitos intensos y diarrea solo moderada", "Diarrea de gran volumen", "El síntoma predominante es el dolor abdominal", "Disentería", "Fiebre muy alta y diarrea moderada"
        ],
        "answer": "Diarrea de gran volumen",
        "feedback": "La diarrea de gran volumen, por lo general, indica compromiso del intestino delgado, como en la gastroenteritis viral o enfermedad por Vibrio cholerae."
    },
    {
        "question": "¿Cual es el antibiótico de elección para una diarrea del viajero, cuando está indicado?",
        "options": [
            "Ciprofloxacino", "Amoxicilina/ácido clavulánico", "Trimetoprim/ Sulfametoxazol", "Azitromicina", "Metronidazol"
        ],
        "answer": "Azitromicina",
        "feedback": "La azitromicina es el antibiótico de elección para estos pacientes, ya que tiene menos tasa de resistencia global y menos riesgo de colitis pseudomembranosa."
    },
    {
        "question": "¿Cual es el antibiótico de primera línea para un paciente con un primer episodio de diarrea por Clostridium difficile con un cuadro clínico leve?",
        "options": [
            "Metronidazol vía oral", "Metronidazol endovenoso", "Vancomicina vía oral", "Vancomicina endovenosa", "Ciprofloxacino vía oral"
        ],
        "answer": "Metronidazol vía oral",
        "feedback": "El tratamiento antimicrobiano recomendado para un primer episodio de diarrea asociada a C. Difficile leve a moderado es Metronidazol de 500 mg cada ocho horas durante 10 a 14 días por vía oral."
    },
    {
        "question": "La triada del Hanta virus consiste en:",
        "options": [
            "Trombocitopenia, hemoconcentración, ausencia de imunoblastos", "Trombocitosis, hemoconcentración, presencia de imnunoblastos", "Trombocitopenia, hemodilución, presencia de inmunoblastos", "Trombocitopenia, hemoconcentración, presencia de inmunoblastos", "Trombocitosis, hemoconcentración, presencia de inmunoblastos"
        ],
        "answer": "Trombocitopenia, hemoconcentración, presencia de inmunoblastos",
        "feedback": "Se debe tomar muestra por exámenes de laboratorio que incluya Hemograma, en el que se pueda observar trombocitopenia, hemoconcentración y la presencia de inmunoblastos"
    },
    {
        "question": "El tratamiento de la NAC con criterios de ingreso hospitalario es:",
        "options": [
            "Cefalosporinas de segunda generación", "Vancomicina", "Cefalosporinas de tercera generación, más macrolidos", "Cefalosporinas de cuarta generación, más macrolidos", "Fluroquinolonas"
        ],
        "answer": "Cefalosporinas de tercera generación, más macrolidos",
        "feedback": "En Neumonías con criterios de ingreso hospitalario, el tratamiento empírico se realiza con cefalosporina de tercera generación, asociado a macrolido o como opción fluroquinolnas."
    },
    {
        "question": "El manejo de EPOC en el servicio de urgencia NO implica:",
        "options": [
            "Evaluación de la severidad de la exacerbación", "Identificar la causa de la exacerbación", " Realizar un scanner como primera medida ", "Alcanzar niveles de saturación adecuados para el paciente", "Retornar la situación clínica del paciente a su condición previa."
        ],
        "answer": "Realizar un scanner como primera medida",
        "feedback": "El manejo del paciente con exacerbación de EPOC en el servicio de urgencia se basa en: • Evaluar la severidad de la exacerbación y de las condiciones clínicas que amenazan la vida del paciente: estado funcional basal, necesidad de oxigeno domiciliario, inestabilidad hemodinámica, uso de musculatura accesoria, alteración del estado mental, frecuencia respiratoria, entre otros • Identificar la causa de la exacerbación • Alcanzar niveles de saturación adecuados para el paciente • Retornar la situación clínica del paciente a su condición previa"
    },
    {
        "question": "El principal agente causante de NAC es:",
        "options": [
            "Mycoplasma pneumoniae", "Haemophilus influenzae", "Streptococcus pneumoniae", "Chlamydia sp.", "virus Influenza"
        ],
        "answer": "Streptococcus pneumoniae",
        "feedback": "Los principales microorganismos que la producen son el Streptococcus pneumoniae seguido por el Mycoplasma pneumoniae, Haemophilus influenzae, Legionella pneumophila. Chlamydia sp. y virus respiratorios como el virus Influenza, entre otros."
    },
    {
        "question": "En pacientes alérgicos a la penicilina el tratamiento de elección para NAC es:",
        "options": [
            "Amoxicilina", "Ceftriaxona", "Cefadroxilo", "Claritromicina", "Levofloxaciono"
        ],
        "answer": "Claritromicina",
        "feedback": "En Neumonías sin criterios de ingreso hospitalario, la duración del tratamiento antibiótico será́ de 7 días. En pacientes alérgicos a penicilina: Claritromicina 500 mg c/12 h o Azitromicina 500 mg al día"
    },
    {
        "question": "El tratamiento antibiótico de elección en pacientes con EPOC leve a moderado sin comorbilidades es:",
        "options": [
            "Amoxicilina 500mg cada 8 horas", "Amoxicilina más ácido clavulanico 500/125mg cada 8horas", "Levofloxaciono 500mg", "Amoxicilina más ácido clavulanico 875/125mg cada 12horas", "Cefadroxilo 500mg cada 12 horas"
        ],
        "answer": "Amoxicilina más ácido clavulanico 875/125mg cada 12horas",
        "feedback": "Pacientes con diagnóstico de EPOC leve o moderada, sin comorbilidad y sin riesgo de infección por Pseudomonas. Las alternativas serán: amoxicilina-clavulánico a dosis superiores a 875/125 mg por dosis, con el objetivo de superar la CMI de los neumococos resistentes a la penicilina."
    },
    {
        "question": "Señale si la afirmación es verdadera o falsa. EPOC es una enfermedad frecuente caracterizada por la limitación crónica del flujo asociado a síntomas respiratorios, debida a anomalías de las vías respiratorias.",
        "options": [
           "Verdadero", "Falso"
        ],
        "answer": "Verdadero",
        "feedback": "EL EPOC es una enfermedad frecuente caracterizada por la limitación crónica del flujo asociado a síntomas respiratorios, debida a anomalías de las vías respiratorias como producto a una exposición a partículas o gases nocivos, dentro de las principales el tabaco."
    },
    {
        "question": "En la evaluación inicial del paciente con EPOC NO es necesario tomar el examen:",
        "options": [
            "Gasometría arteria", "EKG", "Rx tórax", "Exámenes de sangre (hemograma, perfil bioquímico, glicemia)", "Hemocultivos"
        ],
        "answer": "Hemocultivos",
        "feedback": "En la evaluación inicial los exámenes son los señalados. Se debe recordar tomar hemocultivos en caso de una exacerbación sobre infectada la cual necesita de hospitalización y manejo."
    },
    {
        "question": "Señale si la siguiente afirmación es Verdadera o Falsa: La mortalidad de la infección por hanta virus en la fase cardiopulmonar es de 20 a 30%",
        "options": [
            "Verdadero", "Falso"
        ],
        "answer": "Falso",
        "feedback": "La mortalidad de la infección por hanta virus en la fase cardiopulmonar alcanza a entre 30 y 40%"
    },
    {
        "question": "La forma de transmisión más importante del hanta virus es:",
        "options": [
            "Contacto directo", "Inhalación aerosoles", "Ingerir alimentos contaminados", "Contacto con un paciente contaminado", "Transmisión sexual"
        ],
        "answer": "Inhalación aerosoles",
        "feedback": "El modo de transmisión más importante del virus es por inhalación de aerosoles provenientes de las heces, orina y saliva de los roedores portadores."
    },
    {
        "question": "Responda si la siguiente afirmación es Verdadera o Falsa: la gran mayoría de los cuadros de rinofaringitis aguda requieren antibioticoterapia.",
        "options": [
            "Verdadero", "Falso"
        ],
        "answer": "Falso",
        "feedback": "En la mayoría de los casos para el tratamiento de la rinofaringitis solo es necesario el manejo sintomático dado que mayoritariamente son virales, y aun aquellas bacterianas muchas veces se resuelven de forma espontánea."
    },
    {
        "question": "Un paciente de 16 años consulta por odinofagia y fiebre hasta 38,5 grados Celsius, de 12 horas de evolución. Consulta porque tiene prueba al día siguiente y quiere mejorarse antes.Al examen presenta faringe eritematosa, sin exudado, no se palpan adenopatías cervicales y presenta escasa tos durante el examen físico. ¿Cuál es la indicación más costo-efectiva en este caso?",
        "options": [
            "Iniciar tratamiento con Azitromicina 500 mg cada 24 hrs.", "Realizar técnicas rápidas de detección de antígenos (Strep A)", "Tratamiento sintomático con analgésico antiinflamatorio.", "Indicar penicilina benzatina 1.200.000 UI im con lidocaína, dexamentasona oral e ibuprofeno", "Derivar a Otorrinolaringología para estudio y manejo"
        ],
        "answer": "Tratamiento sintomático con analgésico antiinflamatorio.",
        "feedback": "El tratamiento sintomático tiene 1 punto al score de Centor, por lo que es la alternativa más costo efectiva. Probablemente el paciente evolucionará como un resfrío común."
    },
    {
        "question": "El tratamiento antibiótico de primera línea para la rinosinusitis bacteriana es:",
        "options": [
            "Amoxicilina", "Azitromicina", "Penicilina/benzatina", "Claritromicina", "Clindamicina"
        ],
        "answer": "Amoxicilina",
        "feedback": "El tratamiento antibiótico de primera línea para la rinosinusitis bacteriana es amoxicilina, por su eficacia clínica, bajo costo y buena tolerancia."
    },
    {
        "question": "¿Por qué el hematoma auricular y el hematoma septal requieren de su drenaje urgente?",
        "options": [
             "Porque la irrigación del cartílago proviene de la piel, no tiene vasos propios y al perder el contacto con ella deja de llegar sangre, desvitalizándose el cartílago y deformándose con posterioridad.", "Porque la piel protege al cartílago de las infecciones y el hematoma es una fuente frecuente de infecciones cartilaginosas.", "Porque el hematoma puede complicarse extendiéndose hacia el cartílago, destruyéndolo por compresión directa.", "Porque el hematoma se produce por la ruptura de un vaso sanguíneo, el que puede seguir sangrando de forma activa a menos que se drene."
        ],
        "answer": "Porque la irrigación del cartílago proviene de la piel, no tiene vasos propios y al perder el contacto con ella deja de llegar sangre, desvitalizándose el cartílago y deformándose con posterioridad.",
        "feedback": "Una hemorragia cerebral no aparece entre las complicaciones de la rinosinusitis aguda. La meningitis, la celulitis periorbitaria y orbitaria, absceso subperióstico y la trombosis del seno cavernoso sí son complicaciones."
    },
    {
        "question": "Las bacterias más frecuentes en una otitis media aguda son:",
        "options": [
            "Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis", "Haemophilus influenzae, Streptococcus pneumoniae, Staphylococcus aureus", "Moraxella catarrhalis, Gramnegativos, Staphylococcus aureus", "Streptococcus del grupo A, Staphylococcus aureus, Gramnegativos.", "Streptococcus pneumoniae, Streptococcus del grupo A, Staphylococcus aureus"
        ],
        "answer": "Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis",
        "feedback": "Como se vio en la clase los germenes mas comunes en la otitis son Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis"
    },
    {
        "question": "Señale si esta afirmación es Verdadera o Falsa: La otitis media aguda es causada, a menudo, por la disfunción u obstrucción de la trompa de Eustaquio",
        "options": [
            "Verdadero", "Falso"
        ],
        "answer": "Verdadero",
        "feedback": "A menudo la otitis media es causada por la disfunción u obstrucción de la trompa de Eustaquio que impide drenar el líquido que se genera en el pido medio, generándose un medio propicio para el sobrecrecimiento de virus y bacterias."
    },
    {
        "question": "El periodo de incubación de la Influenza desde el contacto es de:",
        "options": [
            "Menos de 3 días", "Entre 1 y 4 días", "Entre 3 y 7 días", "Entre 7 a 10 días", "Entre 7 a 15días"
        ],
        "answer": "Entre 1 y 4 días",
        "feedback": "El periodo de incubación de la Influenza desde el contacto es de entre 1 y 4 días, en cambio el del coronavirus es de 1 a 14 días."
    },
    {
        "question": "Paciente de 65 años consulta por epistaxis de 12 horas de evolución, usa aspirina y clopidogrel, además acenocumarol por un infarto tratado con un stent hace unos meses y una Fibrilación auricular diagnosticada hace dos años.Ingresa con los siguientes signos vitales: PA 127/75 FC 82 lpm, FR 18 rpm, Sat 98% ambiental. Sin fiebre. Bien perfundida. Conciente y cooperadora.¿Cuál de las siguientes alternativas representa el mejor manejo para esta paciente?",
        "options": [
            "Suspender la aspirina, el clopidogrel y el nesintrom, no es necesario revertir la anticoagulación. Realizar un taponamiento anterior del lado sangrante.", "Realizar un taponamiento anterior y posterior del lado sangrante y no suspender ninguno de los medicamentos previos.", "Mantener la compresión vestibular externa hasta que cese el sangrado sin suspender los medicamentos.", "Revertir la anticoagulación, realizar compresión vestibular externa y cauterizar el vaso visible.", "No suspender los medicamentos, realizar compresión vestibular externa y cauterizar el vaso visible o realizar un taponamiento anterior si no es visible."
        ],
        "answer": "No suspender los medicamentos, realizar compresión vestibular externa y cauterizar el vaso visible o realizar un taponamiento anterior si no es visible.",
        "feedback": "No suspender los medicamentos, realizar compresión vestibular externa y cauterizar el vaso visible o realizar un taponamiento anterior si no es visible."
    },
    {
        "question": "La etiología de las faringoamigdalitis es:",
        "options": [
            "Mayoritariamente bacteriana", "Mayoritariamente viral", "Casi siempre desconocida", "La mitad es viral y la otra mitad bacteriana", "El streptococcus pyogenes"
        ],
        "answer": "Mayoritariamente viral",
        "feedback": "Mayoritariamente viral, siendo el más frecuente el rinovirus, seguido del virus de la influenza y parainfluenza, adenovirus, coronavirus, enterovirus, virus herpes e inmunodeficiencia humana."
    },
    {
        "question": "Un paciente de 30 años consulta por otalgia iniciada en el avión de regreso de sus vacaciones. Usted examina al paciente y realiza una otoscopia que muestra lo siguiente (ver imagen). ¿Cuál es el diagnóstico más probable?",
        "options": [
            "Otitis media aguda", "Otitis media con efusión", "Otitis crónica", "Otitis externa", "Otitis externa necrotizante"
        ],
        "answer": "Otitis externa",
        "imgs": "recursos/membrana.png",
        "feedback": "La otitis externa es la inflamación del CAE secundario a una infección. Este se vuelve eritematoso y a veces con secreción como se muestra en la imagen. El cuadro clínico es de otalgia a veces acompañado por otorrea, prurito y disminución de la audición. Es más frecuente durante el verano con el uso de piscinas y playas."
    },
    {
        "question": "Son complicaciones de la RAO todas menos la siguiente alternativa",
        "options": [
            "Retención aguda de orina", "Retención crónica de orina con globo vesical y pocas molestias.", "Anuria obstructiva que tiene ausencia de micción, sin dolor y sin globo vesical, con usualmente, hidronefrosis bilateral", "Insuficiencia renal aguda prerrenal", "Hematuria"
        ],
        "answer": "Insuficiencia renal aguda prerrenal",
        "feedback": "Por obstrucción post renal dada la localización, la insuficiencia renal es postrrenal"
    },
    {
        "question": "Dentro de las infecciones urinarias, podemos aseverar lo siguiente:",
        "options": [
            "La disuria es más común en la infección urinaria baja", "Dentro de los patógenos principales es tan las bacterias Gram positivos como E. Coli", "La fiebre es el síntoma cardinal en la infección urinaria en adultos mayores", "De acuerdo a la realidad nacional la primera línea de tratamiento de la ITU baja es ciprofloxacino", "Las infecciones urinarias en adultos mayores se caracterizan por múltiples síntomas y fiebre elevada"
        ],
        "answer": "La disuria es más común en la infección urinaria baja",
        "feedback": "La disuria es característica de la infección urinaria baja, no así en altas que se caracterizan por fiebre y dolor lumbar principalmente."
    },
    {
        "question": "¿Cuáles son los exámenes atingentes en el estudio de la hematuria?",
        "options": [
            "Parcial de orina", "Pielotac", "Eco tomografía renal", "Tiras reactivas de orina", "Urocultivo."
        ],
        "answer": "Parcial de orina",
        "feedback": "El parcial de orina es el único que nos entregará el detalle de la presencia de eritrocitos o no en la orina y la cantidad para hacer diagnóstico."
    },
    {
        "question": "En cuanto a la retención aguda de orina el principal objetivo en la urgencia es el siguiente:",
        "options": [
            "Determinar las causas de la obstrucción", "Detener el crecimiento androgénico de la próstata", "Descompresión de la vejiga y alivio sintomático", "Administrar soluciones parenterales para acelerar micción", "No se recomienda control con urólogo hasta una semana post evento"
        ],
        "answer": "Descompresión de la vejiga y alivio sintomático",
        "feedback": "El paciente con RAO, usualmente se queja de dolor asociado a distensión por globo vesical, por tanto, el aliviar este apremio descomprimiendo la vejiga, será beneficioso para el paciente y nos ayudará incluso a obtener una mejor historia en aquel paciente quejumbroso poco colaborador."
    },
    {
        "question": "En el manejo del cólico renal es falso lo siguiente:",
        "options": [
            "La analgesia es fundamental en el manejo del servicio de urgencia.", "En la terapia expulsiva debe restringirse la ingesta de líquidos para evitar dolor por distensión vesical.", "Todo cálculo menor a 5 mm ubicado en vía urinaria distal puede someterse a terapia expulsiva.", "Orina sin leucocituria más hematuria es altamente sugerente.", "La uropatía obstructiva es causa de hospitalización"
        ],
        "answer": "En la terapia expulsiva debe restringirse la ingesta de líquidos para evitar dolor por distensión vesical.",
        "feedback": "La ingesta de líquidos abundantes al menos 1,5 a 2 litros es recomendación para manejo expulsivo en cólicos renoureterales."
    },
    {
        "question": "De las siguientes aseveraciones, indique la alternativa falsa.",
        "options": [
            "La hematuria es la presencia de sangre en la orina en cantidad anormal.", "La hematuria al inicio de la micción se asocia a patología prostática.", "Uno de los fármacos que puede imitar hematuria es la azitromicina.", "El urotac es el examen de elección para estudio de hematuria.", "El consumo de alcachofa puede originar pigmentación de orina."
        ],
        "answer": "Uno de los fármacos que puede imitar hematuria es la azitromicina.",
        "feedback": "La coloración roja asociada a uso de medicamentos se asocia con rifampicina."
    },
    {
        "question": "En relación a la hematuria podemos aseverar como verdadero lo siguiente:",
        "options": [
            "La incidencia no varía por sexo ni edad.", "Es común que el origen prostático se evidencie como hematuria durante toda la micción.", "Asociada a polaquiuria y disuria se hace indispensable su estudio.", "La patología oncológica en ancianos puede manifestarse con hematuria.", "Asociada a dolor tipo cólico, descarta litiasis renal."
        ],
        "answer": "La patología oncológica en ancianos puede manifestarse con hematuria.",
        "feedback": "Ya sea en etapas iniciales o avanzadas, la patología oncológica puede manifestarse como hematuria sin otro síntoma o signo asociado."
    },
    {
        "question": "¿Cuál de las siguientes aseveraciones es falsa?",
        "options": [
            "La tamsulosina en retención aguda de orina es la primera medida en el tratamiento de la RAO.", "La cistoscopia es indicada en sospecha de lesiones tumorales.", "El paciente monorreno tiene indicación de hospitalización en litiasis renal.", "La leucocituria en hombre es sugerente de prostatitis.", "Las infecciones urinarias en hombres son menos frecuentes."
        ],
        "answer": "La tamsulosina en retención aguda de orina es la primera medida en el tratamiento de la RAO.",
        "feedback": "La primera medida en la RAO es la descompresión de la vejiga mediante sondeo Para alivio del dolor"
    },
    {
        "question": "Respecto a la urolitiasis, seleccione la alternativa correcta.",
        "options": [
            "Los cálculos menores de 5mm pueden someterse a terapia expulsiva.", "Los betabloqueadores tipo tamsulosina aceleran la salida del cálculo del tracto urinario.", "El pielotac es un scanner contrastado de abdomen y pelvis para evaluar las vías urinarias.", "Los AINES están contraindicados en el manejo del dolor en cólicos renales.", "Mientras más alta la ubicación del cálculo mejor efecto de la tamsulosina."
        ],
        "answer": "Los cálculos menores de 5mm pueden someterse a terapia expulsiva.",
        "feedback": "Por tamaño y localización (distal) cálculos menores de 5mm puede ser expulsados con mayor facilidad asociado a uso de tamsulosina."
    },
    {
        "question": "Por tamaño y localización (distal) cálculos menores de 5mm puede ser expulsados con mayor facilidad asociado a uso de tamsulosina.",
        "options": [
            "Uso de antidepresivos tricíclicos.", "Vulvovaginitis", "Lesiones de motoneurona inferior.", "Hipertrofia prostática benigna.", "Litiasis renal"
        ],
        "answer": "Hipertrofia prostática benigna.",
        "feedback": "La principal causa de RAO en adultos mayores hombres es la hipertrofia benigna prostática."
    },
    {
        "question": "Paciente de 30 años recibe impacto de bala en pierna derecha mientras iba a comprar pan. Ingresa con fractura expuesta de pierna derecha, sin déficit de cobertura, sin otras lesiones. ¿Cuál es la clasificación y manejo antibiótico correspondiente en el S. de Urgencia?",
        "options": [
            "Gustilo y Anderson 3A. Cefazolina 2gr y Gentamicina 240mg", "Gustilo y Anderson 2. Cefazolina 2gr", "Gustilo y Anderson 1. Ciprofloxacino 500mg ev", "Gustilo y Anderson 3C. Cefazolina 2gr, Gentamicina 240mg y Penicilina 4 millones UI ev.", "Gustilo y Anderson 3B. Cefazolina 2gr y Gentamicina 240mg"
        ],
        "answer": "Gustilo y Anderson 3A. Cefazolina 2gr y Gentamicina 240mg",
        "feedback": "La clasificación de Gustilo y Anderson es diagnóstica y terapéutica. En este caso es claro que al tratarse de una fractura de alta energía (bala) se considera de inmediato 3. No tiene déficit de cobertura ni compromiso vascular que requiera reparación, por lo que es 3A. Estas fracturas se manejan con Cefazolina y Gentamicina."
    },
    {
        "question": "En el paciente anterior (45 años con dolor lumbar lateralizado a derecha, sin trauma ni otras banderas rojas, que refiere irradiación en aspecto posterolateral de la pierna derecha. Al examen destaca paresia del Extensor Largo del Hallux y leve hipoestesia primer espacio inter-ortejos) - además de la educación - el tratamiento inicial más adecuado es:",
        "options": [
            "Reposo en cama 10 días. Paracetamol y AINEs por una semana", "Reposo relativo, Paracetamol y Relajantes musculares", "Infiltración transforaminal L5-S1 y reposo", "Reposo relativo, Quiropraxia y Acupuntura", "Reposo relativo, AINEs y Corticoide intramuscular en una dosis"
        ],
        "answer": "Reposo relativo, AINEs y Corticoide intramuscular en una dosis",
        "feedback": "Si bien el Paracetamol y los Relajantes musculares podrían tener un rol, los AINEs y Corticoides tienen un mayor efecto en el manejo del dolor lumbociático."
    },
    {
        "question": "Los microorganismos más frecuentemente aislados en los cultivos de Artritis Séptica  a los cuales debe ir orientado el tratamiento empírico – son:",
        "options": [
            "Bacilos gram negativos", "Cocáceas gram negativas", "Cocáceas gram positivas", "Cocobacilos gram positivos", "Candida albicans"
        ],
        "answer": "Cocáceas gram positivas",
        "feedback": "Por lejos, los microorganismos más frecuentemente identificados  en todo grupo de pacientes  son los Streptococcus y el Staphylococcus aureus. El resto son microorganismos inhabituales"
    },
    {
        "question": "Respecto al dolor lumbar podemos aseverar:",
        "options": [
            "Es una causa infrecuente de consulta tanto ambulatoria como en el Servicio de Urgencia", "En Chile cerca del 25% de las licencias médicas corresponden a Dolor Lumbar", "Más del 70% de la población padecerá de Dolor Lumbar en algún momento de su vida", "Los hombres padecen significativamente más dolor lumbar que las mujeres", "La edad de presentación más frecuente es en menores de 40 años"
        ],
        "answer": "Más del 70% de la población padecerá de Dolor Lumbar en algún momento de su vida",
        "feedback": "El dolor lumbar es una causa frecuente de consulta y se traduce en el 5,4% de las Licencias Médicas de causa no traumática. La distribución es similar entre hombres y mujeres y la presentación más frecuente es entre 35 y 55 años de edad."
    },
    {
        "question": "Paciente de 45 años con dolor lumbar lateralizado a derecha. Sin trauma ni otras banderas rojas. Refiere irradiación en aspecto posterolateral de la pierna derecha. Al examen destaca paresia del Extensor Largo del Hallux y leve hipoestesia primer espacio inter-ortejos. ¿Cuál es la raíz más probablemente comprometida?",
        "options": [
            "S1", "L2", "L3", "L4", "L5"
        ],
        "answer": "L5",
        "feedback": "Esta raíz nerviosa da la inervación del EHL que en la pregunta se encuentra parético y da característicamente inervación sensitiva en el primer espacio inter-artejos."
    },
    {
        "question": "Como médico de Urgencia, una vez realizado el diagnóstico de Artritis Séptica el manejo ideales:",
        "options": [
            "Iniciar manejo antibiótico endovenoso y analgesia", "Reposo relativo, extremidad en alto, frío local y antibióticos ev una vez obtenido el resultado del cultivo", "Iniciar manejo antibiótico endovenoso y derivar para manejo quirúrgico urgente por Traumatólogo", "Analgesia y antibióticos orales. Control ambulatorio con Traumatología", "Drenar articulación con jeringa y antibióticos endovenosos según cultivo"
        ],
        "answer": "Iniciar manejo antibiótico endovenoso y derivar para manejo quirúrgico urgente por Traumatólogo",
        "feedback": "Una vez realizado el diagnóstico mediante el estudio del líquido articular debe iniciarse manejo antibiótico endovenoso a la brevedad y derivar al paciente para manejo urgente por especialista."
    },
    {
        "question": "¿Cuál de los siguientes parámetros de laboratorio es diagnóstico de Artritis Séptica?",
        "options": [
            "Glucosa líquido articular 50mg/dL", "Recuento celular líquido articular 65.000 cells/mm3", "60% PMN en líquido articular", "PCR 5 veces el valor normal del laboratorio", "VHS 100 mm/hr"
        ],
        "answer": "Recuento celular líquido articular 65.000 cells/mm3",
        "feedback": "Si bien los otros parámetros de laboratorio son sugerentes de Artritis Séptica, el único de los descritos con el cual se puede hacer el diagnóstico confirmado es con el recuento celular de 65.000"
    },
    {
        "question": "¿Cuál de las siguientes NO es una Emergencia Traumatológica?",
        "options": [
            "Fracturas expuestas", "Sindrome compartimental", "Artritis séptica", "Fractura de acetábulo", "Luxación de cadera"
        ],
        "answer": "Fractura de acetábulo",
        "feedback": "La fractura de acetábulo es una patología traumatológica grave, pero que, a diferencia de las otras, no requiere de manejo quirúrgico inmediato ni urgente, sino que en diferido y programado."
    },
    {
        "question": "¿Cuál de estos NO es factor de riesgo para desarrollar Artritis Séptica de rodilla?",
        "options": [
            "Artroplastía total de cadera", "Artritis Reumatoidea", "Artrosis de rodilla", "Placas psoriáticas sobre superficie extensora rodilla", "Inmunosupresión"
        ],
        "answer": "Artroplastía total de cadera",
        "feedback": "La artroplastía total o parcial de cadera no tiene ninguna relación con el desarrollo o no de una artritis séptica de rodilla. Todos los otros son factores de riesgo."
    },
    {
        "question": "¿Cuál de las siguientes es una Bandera Roja en un paciente con dolor lumbar?",
        "options": [
            "Trastorno del ánimo", "Mujer de 45 años", "Cuadro febril reciente, tratado", "Cáncer de mama, en control", "Baja de peso por cambio en régimen E) "
        ],
        "answer": "Cáncer de mama, en control",
        "feedback": "El antecedente de patología neoplásica, ya sea de diagnóstico reciente o antiguo, tratada o no, corresponde a una Bandera Roja debido al aumento de probabilidades de que el dolor lumbar se deba a patología neplásica (ubicación secundaria)."
    }
]
