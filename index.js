// Tapsyrma.1

// function kalkulator() {
//     let num1, num2;

//     function sanEngiz(promptText) {
//         while (true) {
//             let input = prompt(promptText);
//             if (input !== null) {
//                 return parseFloat(input);
//             }
//             alert("Қате енгізу! Санды дұрыс енгізіңіз.");
//         }
//     }

//     num1 = sanEngiz("Бірінші санды енгізіңіз:");
//     num2 = sanEngiz("Екінші санды енгізіңіз:");

//     const qosu = num1 + num2;
//     const azaitu = num1 - num2;
//     const kobeitu = num1 * num2;
//     let bolu = "Бөлгіш 0 болғандықтан, бөлу мүмкін емес.";

//     if (num2 !== 0) {
//         bolu = num1 / num2;
//     }

//     alert(`Нәтижелер:
//         Қосу: ${num1} + ${num2} = ${qosu}
//         Алу: ${num1} - ${num2} = ${azaitu}
//         Көбейту: ${num1} * ${num2} = ${kobeitu}
//         Бөлу: ${bolu}
//     `);
// }

// kalkulator();

// Tapsyrma.2

// function skidkaBilu() {
//     const bagasy = +prompt("Заттың бағасын енгізіңіз:");
//     const sany = +prompt("Қанша зат сатып алғыңыз келеді?");

//     if (bagasy <= 0 || sany <= 0) {
//         alert("Дұрыс мәндерді енгізіңіз.");
//         return;
//     }

//     const zhalpyBaga = bagasy * sany;
//     let skidka = 0;

//     if (zhalpyBaga > 20000) {
//         skidka = 0.3; 
//     } else if (zhalpyBaga > 10000) {
//         skidka = 0.2; 
//     } else if (zhalpyBaga > 5000) {
//         skidka = 0.1; 
//     }

//     const songyBaga = zhalpyBaga - zhalpyBaga * skidka;

//     alert(`Жалпы баға: ${zhalpyBaga} теңге\nЖеңілдік: ${skidka * 100}%\nСоңғы төлем: ${songyBaga.toFixed(2)} теңге`);
// }

// skidkaBilu();

// Tapsyrma.3

// function sandyTap() {
//     const zhasyrynSan = Math.floor(Math.random() * 100) + 1; 
//     let shans = 0; 
//     let tabu = false;

//     console.log("1 мен 100 арасында жасырылған санды табыңыз!");

//     while (!tabu) {
//         const sanEngiz = parseInt(prompt("Сіздің жорамалыңыз: "), 10); 
//         shans++;

//         if (sanEngiz < 1 || sanEngiz > 100) {
//             console.log("Тек 1 мен 100 арасындағы бүтін санды енгізіңіз.");
//             continue;
//         }

//         const aiyrmashylygy = Math.abs(zhasyrynSan - sanEngiz);

//         if (sanEngiz === zhasyrynSan) {
//             console.log(`Дұрыс! Жасырылған сан ${zhasyrynSan} еді. Сіз ${shans} әрекетте таптыңыз.`);
//             tabu = true;
//         } else if (aiyrmashylygy <= 5) {
//             if (sanEngiz < zhasyrynSan) {
//                 console.log("Сәл жоғары");
//             } else {
//                 console.log("Сәл төмен");
//             }
//         } else {
//             if (sanEngiz < zhasyrynSan) {
//                 console.log("Жай жоғары");
//             } else {
//                 console.log("Жай төмен");
//             }
//         }
//     }
// }

BonusTapsyrma:

function Bonus() {
    let num1 = parseInt(prompt("Бірінші санды енгізіңіз (num1):"));
    let num2 = parseInt(prompt("Екінші санды енгізіңіз (num2):"));

    console.log(`Ауыстырмас бұрын: num1 = ${num1}, num2 = ${num2}`);

    num1 = num1 + num2; 
    num2 = num1 - num2; 
    num1 = num1 - num2; 

    console.log(`Ауыстырылғаннан кейін: num1 = ${num1}, num2 = ${num2}`);
}

Bonus();
