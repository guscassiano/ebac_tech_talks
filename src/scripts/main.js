AOS.init()

const dataEvento = new Date("Mar 12, 2023 19:00:00")
const timestampEvento = dataEvento.getTime()

const contaTempo = setInterval(() => {
    const agora = new Date();
    const timestampAtual = agora.getTime()

    const distanciaEvento = timestampEvento - timestampAtual;

    const diasAteEvento = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24))
    const horasAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60 )) / (1000 * 60))
    const segundosAteEvento = Math.floor((distanciaEvento % (1000 * 60)) / 1000)
    console.log(segundosAteEvento)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaEvento < 0) {
        clearInterval(contaTempo)
        document.getElementById('contador').innerHTML = "EVENTO EXPIRADO"
    }
}, 1000);

