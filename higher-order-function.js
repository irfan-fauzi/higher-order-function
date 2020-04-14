// Higher Order Function = Function yang beroperasi pada function yang lain, baik itu digunakan dalam argument, maupun sebagai return value,
// Javascript memperlakukan function sebagai Object 
function kerjakanTugas(param1, param2) {
    console.log(`mulai menegrjakan tugas ${param1}....`);
    param2();
}
// function ini adalah argumen 
function selesai() {
    alert('tugas selesai dikerjakan');
}
kerjakanTugas('fisika', selesai);