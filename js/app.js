function calculate() {
            const COBERTURA = 12;

            const ALTO = parseFloat(document.getElementById('altura').value);
            const ANCHO = parseFloat(document.getElementById('ancho').value);
            const MANOSDEPINTURA = parseInt(document.getElementById('numero').value);

            if (isNaN(ALTO) || isNaN(ANCHO) || isNaN(MANOSDEPINTURA) || ALTO <= 0 || ANCHO <= 0 || MANOSDEPINTURA <= 0) {
                document.getElementById('result').innerText = "Por favor, introduzca valores positivos validos.";
                return;
            }

            const AREA = ALTO * ANCHO; // Площадь стены
            const TODAAREA = AREA * MANOSDEPINTURA; // Общая площадь с учетом слоев
            const LITROSNECESITO = TODAAREA / COBERTURA; // Необходимые литры

            document.getElementById('result').innerHTML = 
                `Para pintar una pared con area <span style="color: #2481a2;">${AREA.toFixed(2)} m²</span> ` +
                `en <span style="color: #2481a2;">${MANOSDEPINTURA}</span> manos de pintura ` +
                `necesitaras aproximadamente <span style="color: #2481a2;">${LITROSNECESITO.toFixed(2)}</span> litros de pintura.`;
        }
