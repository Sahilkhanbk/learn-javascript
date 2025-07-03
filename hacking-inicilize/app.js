

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000)
    })
}

const additem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}


async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        } else {
            last.innerHTML = last.innerHTML + "."

        }

    }, 80);

    let text = [
        "Initialized hacking now reading your server",
        "Reading your files",
        "Password files detected",
        "Sending all files and password to server",
        "Cleaning up ",
        "reset your system",
        "Everything now in my control",
    ]

    for (const item of text) {
        additem(item)
    };

}
main()







