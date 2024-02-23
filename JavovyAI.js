alert('By AYHAM ')
const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const GetImages = async () => {
    //make a request to OpenAi
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            prompt: inp.value,
            n: 2,
            size: "256x256",
        })
    };
    alert('Wait 7 Seconds!')

    const res = await fetch("https://api.openai.com/v1/images/generations", methods);

    //parse the response as JSON
    const data = await res.json();
    const listImages = data.data;
    listImages.forEach(photo => {
        const container = document.createElement('div');
        images.appendChild(container);
        const img = document.createElement('img');
        container.appendChild(img);
        img.src = photo.url;
    });
};