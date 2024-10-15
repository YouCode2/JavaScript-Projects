let Input = document.getElementById("date");
let Result = document.getElementById('result')
Input.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    const Dob = new Date(Input.value)

    let d1 = Dob.getDate();
    let m1 = Dob.getMonth() + 1;
    let y1 = Dob.getFullYear();

    let curretDate = new Date();

    let d2 = curretDate.getDate();
    let m2 = curretDate.getMonth() + 1;
    let y2 = curretDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1
    }
    else {
        y3--;
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1) {
        d3 = d2 - d1
    }
    else {
        m3--;
        d3 = getDaysinMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    Result.innerHTML = `You are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days old`

}

function getDaysinMonth(Year, Month) {
    return new Date(Year, Month, 0).getDate();
}