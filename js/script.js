async function genAllReports() {
    const response = await fetch("urls.cfg")
    const configText = await response.text()
    const configLines = configText.split("\n")

    for (let ii = 0; ii < configLines.length; ii++) {
        const configLine = configLines[ii]
        const [key, url] = configLine.split("=")

        if (!key || !url) {
            continue
        }
    }
}