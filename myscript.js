const userName = document.querySelector(".member-name");
const userRole = document.querySelector(".member-role");
const userPhoto = document.querySelector(".member-photo");


//creare array di oggetti per rappresentare i membri del team
const team = [
    //ogni membro(oggetto) è caratterizzato dalle seguenti informazioni: nome, ruolo e foto
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Carrol",
        "ruolo": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    }
    
];

/* for (let key in team) {
    console.log(key + " : " + team[key]);
} */

//stampare su console, per ogni membro del team, le informazioni di nome, ruole e la stringa della foto



///stampare le stesse informazioni su DOM sottoforma di stringhe


for (let i = 0; i < team.length; i++) {
    let teamMember = team[i]
    let memberName = teamMember.nome;
    let memberRole = teamMember.ruolo;
    let memberPhoto = teamMember.foto;
    newDiv(userName,"Nome: ", memberName);
    newDiv(userRole,"Ruolo: ", memberRole);
    newImg(userPhoto, memberPhoto);
}

