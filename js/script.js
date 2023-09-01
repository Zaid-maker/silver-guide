async function genReportLog(container, key, url) {
    const response = await fetch("logs/" + key + "_report.log")

    let statusLines = ""

    if (response.ok) {
        statusLines = await response.text()
    }
}

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

        await genReportLog(document.getElementById("reports", key, url))
    }
}