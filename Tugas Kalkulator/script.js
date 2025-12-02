// Fungsi untuk menghitung konversi
function convertLength() {
    // 1. Ambil nilai dari input feet
    let feet = document.getElementById("feetInput").value;
    
    // 2. Ambil elemen output meter
    let meterOutput = document.getElementById("meterOutput");

    // 3. Cek apakah input kosong
    if (feet === "") {
        meterOutput.value = ""; // Kosongkan hasil jika input dihapus
        return;
    }

    // 4. Lakukan perhitungan (1 feet = 0.3048 meter)
    let result = parseFloat(feet) * 0.3048;

    // 5. Tampilkan hasil (dibulatkan 4 desimal agar rapi)
    meterOutput.value = result.toFixed(4);
}

// Fungsi untuk mereset kalkulator
function resetCalculator() {
    document.getElementById("feetInput").value = "";
    document.getElementById("meterOutput").value = "";
}