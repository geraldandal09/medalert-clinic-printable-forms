<template>
  <div class="letterhead">
    <!-- HEADER -->
    <div class="header">
      <div class="doctor-name">
        ROLAND B. ABADAY, MD, FPCP
      </div>

      <div class="specialty">
        Internal Medicine – Gastroenterology
      </div>

      <div class="credentials">
        Fellow, Philippine College of Physicians<br>
        Diplomate, Philippine Specialty Board of Internal Medicine
      </div>
    </div>

    <!-- DETAILS -->
    <div class="details">
      <div class="left">
      LIVINGHOPE HOSPITAL<br>
        2nd Floor – Endoscopy Room<br>
        Isagani, Maasin City, So. Leyte
      </div>

      <div class="right">
        <div>MON–FRI: 9:00 AM – 11:00 AM</div>
        <div>NO CLINIC: WED, SAT, SUN</div>
        <div>CELL: 0915-941-7773 / 0948-868-1278</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorLetterhead',
}
</script>

<style scoped>
/* =========================
   BASE (A4 DEFAULT)
========================= */
.letterhead {
  width: 100%;
  font-family: "Times New Roman", serif;
  color: #000;
  transform-origin: top center;
}

/* HEADER */
.header {
  text-align: center;
}

.doctor-name {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.specialty {
  font-size: 14px;
}

.credentials {
  font-size: 11px;
  line-height: 1.3;
}

/* DETAILS */
.details {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  border-bottom: 3px solid #000;
  padding-bottom: 4px;
}

.left {
  width: 47%;
  text-align: left;
  }

.right {
  width: 50%;
  text-align: left;
}

/* =========================
   A5 AUTO SCALE
========================= */
body.A5 .letterhead {
  transform: scale(0.85);
}

/* =========================
   A4 (RESET / DEFAULT)
========================= */
body.A4 .letterhead {
  transform: scale(1);
}
</style>
