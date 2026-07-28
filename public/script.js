const API = "http://localhost:5000";

async function shortenURL(){

    const url=document.getElementById("urlInput").value;

    const res=await fetch(API+"/shorten",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({url})

    });

    const data=await res.json();

    if(res.ok){

        document.getElementById("result").innerHTML=`
            <p><b>Short URL:</b></p>
            <a href="${data.shortUrl}" target="_blank">
                ${data.shortUrl}
            </a>
        `;

    }else{

        document.getElementById("result").innerHTML=
        `<p style="color:red">${data.message}</p>`;
    }

}

async function getAnalytics(){

    const code=document.getElementById("codeInput").value;

    const res=await fetch(API+"/analytics/"+code);

    const data=await res.json();

    if(res.ok){

        document.getElementById("analytics").innerHTML=`
            <p><b>Original URL:</b> ${data.originalUrl}</p>
            <p><b>Clicks:</b> ${data.clicks}</p>
            <p><b>Created:</b> ${new Date(data.createdAt).toLocaleString()}</p>
        `;

    }else{

        document.getElementById("analytics").innerHTML=
        `<p style="color:red">${data.message}</p>`;
    }

}