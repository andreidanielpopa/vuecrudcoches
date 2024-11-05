import Global from "./../Global";

export default class ServiceCoches {
    getCoches() {
        return new Promise(function (resolve) {
            let coches = [];
            let request = 'api/coches';
            let url = Global.urlApiCoches + request;
            fetch(url).then(response => {
                coches = response.json();
                resolve(coches);
            })
        })
    }

    findCoche(id) {
        return new Promise(function (resolve) {
            let request = 'api/coches/findcoche/' + id;
            let url = Global.urlApiCoches + request;
            let coche = {};
            fetch(url).then(response => {
                coche = response.json();
                resolve(coche);
            })
        })
    }

    insertCoche(coche) {
        return new Promise(function (resolve) {
            let request = 'api/coches/insertcoche';
            let url = Global.urlApiCoches + request;
            fetch(url, {
                method: "POST",
                body: JSON.stringify(coche),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(response => {
                resolve(response.json());
            })
        })
    }

    updateCoche(coche) {
        return new Promise(function (resolve) {
            let request = 'api/coches/updatecoche';
            let url = Global.urlApiCoches + request;
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(coche),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(response => {
                resolve(response);
            })
        })
    }

    deleteCoche(id) {
        return new Promise(function (resolve) {
            let request = 'api/coches/deletecoche/'+id;
            let url = Global.urlApiCoches + request;
            fetch(url).then(response => {
                resolve(response);
            })
        })
    }
}