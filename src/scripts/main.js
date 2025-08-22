AOS.init();

const dataDoEvento = new Date("Aug 21, 2025 22:10:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAgora;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor(distanciaAteEvento % diasEmMs / horasEmMs);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horasEmMs / minutosEmMs);
    const segundosAteEvento = Math.floor(distanciaAteEvento % minutosEmMs / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento} Dias ${horasAteEvento} Horas ${minutosAteEvento} minutos e ${segundosAteEvento} segundos.`

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = `Evento expirado`
    }

}, 1000);