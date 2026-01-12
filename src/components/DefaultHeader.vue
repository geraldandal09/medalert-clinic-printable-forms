<template>
    <div class="letterhead">
        <!-- HEADER -->
        <div class="header">
            <div class="doctor-name">
                DR. {{ formData.doctor.first_name }} {{ formData.doctor.last_name }}
            </div>

            <div
                class="specialization"
                v-if="formData.doctor.specialization"
            >
                {{ formData.doctor.specialization }}
            </div>

            <div
                class="credentials"
                v-if="formData.doctor.credentials && formData.doctor.credentials.length"
            >
                <div
                    v-for="(cred, index) in formData.doctor.credentials"
                    :key="index"
                >
                    {{ cred }}
                </div>
            </div>
        </div>

        <!-- CLINIC INFO -->
        <div class="info-section">
            <div
                v-for="(clinic, clinicIndex) in formData.doctor.clinics"
                :key="clinicIndex"
                class="clinic"
            >
                <strong>{{ clinic.name }}</strong><br>
                {{ clinic.address }}<br>
                {{ clinic.locality }}<br>
                {{ contactNumbers(clinic) }}
            </div>
        </div>

        <!-- DIVIDER -->
        <div class="divider"></div>
    </div>
</template>

<script>
export default {
    name: "DoctorLetterhead",
    data() {
        return {
            formData: {
                doctor: {
                    first_name: "RolAND B.",
                    last_name: "ABADAY, MD., FPCP",
                    specialization: "Internal Medicine - Gastroenterology",
                    credentials: [
                        "Fellow, Philippine College of Physicians",
                        "Diplomate, Philippine Specialty Board of Internal Medicine"
                    ],
                    clinics: [
                        {
                            name: "LIVINGHOPE HOSPITAL",
                            address: "2nd Floor - Endoscopy Room",
                            locality: "Isagani, Maasin City, So Leyte",
                            appointments_hotline: "0915-941-7773",
                            contact_number: "0948-868-1278"
                        }
                    ]
                }
            }
        };
    },
    methods: {
        contactNumbers(clinic) {
            return [clinic.appointments_hotline, clinic.contact_number]
                .filter(Boolean)
                .join(" / ");
        }
    }
};
</script>

<style scoped>
.letterhead {
    font-family: "Times New Roman", serif;
    color: #000;
    padding: 30px;
}

/* HEADER */
.header {
    text-align: center;
    margin-bottom: 25px;
}

.doctor-name {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 1px;
}

.specialization {
    font-size: 18px;
    margin-top: 4px;
}

.credentials {
    font-size: 14px;
    margin-top: 6px;
    line-height: 1.4;
}

/* CLINIC INFO */
.info-section {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}

.clinic {
    width: 48%;
    line-height: 1.5;
}

/* DIVIDER */
.divider {
    margin-top: 25px;
    border-top: 3px solid #000;
}

/* PRINT SUPPORT */
@media print {
    .letterhead {
        padding: 0;
    }
}
</style>
