<template>
    <div id="form">
        <div class="container">
            <header>Register</header>
            <form action="">
                    <div class="form-group">
                        <label for="fname">ชื่อ</label>
                        <input class="form-control" type="text" name="fname" 
                        v-model="form.fname">
                    </div>
                    {{form.fname}}
                    <div class="form-group">
                        <label for="lname">นามสกุล</label>
                        <input class="form-control" type="text" name="lname"
                        v-model="form.lname">
                    </div>
                    {{form.lname}}
                    <div class="form-group">
                        <label for="tel">เบอร์โทร</label>
                        <input class="form-control" type="tel" name="tel"
                        v-model="form.tel">
                    </div>
                    {{form.tel}}
                    <div class="form-group">
                        <label for="email">อีเมล</label>
                        <input class="form-control" type="email" name="email"
                        v-model="form.email">
                    </div>
                    {{form.email}}
                    <div class="form-group">
                        <label for="password">รหัสผ่าน</label>
                        <input class="form-control" type="password" name="password"
                        v-model="form.password">
                    </div>
                    {{form.password}}
                    <div class="form-group">
                        <label for="gender">เพศ</label>
                        <input type="radio" name="gender" value="ชาย" 
                        v-model="form.gender"> ชาย
                        <input type="radio" name="gender" value="หญิง"
                        v-model="form.gender"> หญิง
                    </div>
                    {{form.gender}}
                    <div class="form-group">
                        <label for="upload">รูปภาพ</label>
                        <input type="file" name="file">
                    </div>
                    {{form.upload}}
                    <div class="form-group">
                        <label for="news">รู้จักเว็บไซต์นี้ได้ยังไง</label>
                        <select name="news" v-model="form.news">
                            <option value="">โปรดเลือก 1 ข้อ</option>
                            <option value="โฆษาในSocial Media">โฆษาในSocial Media</option>
                            <option value="เพื่อนแนะนำ">เพื่อนแนะนำ</option>
                            <option value="ค้นหาเจอในGoogle">ค้นหาเจอในGoogle</option>
                            <option value="โฆษณาผ่านเว็บต่างๆ">โฆษณาผ่านเว็บต่างๆ</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                    </div>
                    {{form.news}}
                    <div class="form-group">
                        <label for="agreement">ข้อตกลงและเงื่อนไข</label>
                        <div class="form-agreement">
                            <input type="checkbox" name="agreement" value="ยินยอมรับข้อตกลง"
                            v-model="form.agreement">
                            <label for="agreement">ยินยอมรับข้อตกลง</label>
                        </div>
                        <div class="form-agreement">
                            <input type="checkbox" name="agreement" value="ยินยอมรับข้อมูลข่าวสาร"
                            v-model="form.agreement">
                            <label for="agreement">ยินยอมรับข้อมูลข่าวสาร</label>
                        </div>
                    </div>
                    {{form.agreement}}
                    <div class="btn">
                        <button type="submit" class="btn btn-primary">ลงทะเบียน</button>
                        <button type="button" @click="onReset" class="btn btn-danger">ล้างข้อมูล</button>
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                fname: '',
                lname: '',
                tel: '',
                email: '',
                password: '',
                gender: '',
                file: null,
                news: '',
                agreement: []
            }
        }
    },
    methods: {
        onSubmit() {

        },
        onReset() {
            this.form = {
                fname: '',
                lname: '',
                tel: '',
                email: '',
                password: '',
                gender: '',
                upload: '',
                news: '',
                agreement: []
            }
        }
    },
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .container {
        width: 500px;
    }
    header {
        text-align: center;
        font-size: 2rem;
    }
    label {
        display: block;
    }
    .form-agreement {
        display: flex;
        align-items: center;
    }
    .btn {
        display: flex;
        justify-content: space-evenly;
    }
</style>

