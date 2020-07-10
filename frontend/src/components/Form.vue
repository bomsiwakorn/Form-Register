<template>
    <div id="form">
        <div class="container">
            <header>Register</header>
            <form action="" @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label for="fname">ชื่อ</label>
                        <input class="form-control" type="text" name="fname" 
                        v-model="form.fname"
                        v-validate="'required'"                      
                        :class="{ 'is-invalid': errors.has('fname') }">
                        <span class="invalid-feedback">{{ errors.first('fname') }}</span>
                    </div>
                    {{form.fname}}
                    <div class="form-group">
                        <label for="lname">นามสกุล</label>
                        <input class="form-control" type="text" name="lname"
                        v-model="form.lname"
                        v-validate="'required'"                      
                        :class="{ 'is-invalid': errors.has('lname') }">
                        <span class="invalid-feedback">{{ errors.first('lname') }}</span>
                    </div>
                    {{form.lname}}
                    <div class="form-group">
                        <label for="tel">เบอร์โทร</label>
                        <input class="form-control" type="tel" name="tel"
                        v-model="form.tel"
                        v-validate="{ required: true, regex: /^([0-9]+)$/ }"                        
                        :class="{ 'is-invalid': errors.has('tel') }">
                        <span class="invalid-feedback">{{ errors.first('tel') }}</span>
                    </div>
                    {{form.tel}}
                    <div class="form-group">
                        <label for="email">อีเมล</label>
                        <input class="form-control" type="email" name="email"
                        v-model="form.email"
                        v-validate="'required'"                       
                        :class="{ 'is-invalid': errors.has('email') }">
                        <span class="invalid-feedback">{{ errors.first('email') }}</span>
                    </div>
                    {{form.email}}
                    <div class="form-group">
                        <label for="password">รหัสผ่าน</label>
                        <input class="form-control" type="password" name="password"
                        v-model="form.password"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('password') }" >
                        <span class="invalid-feedback">{{ errors.first('password') }}</span>
                    </div>
                    {{form.password}}
                    <div class="form-group">
                        <label for="gender">เพศ</label>
                        <input type="radio" name="gender" value="ชาย" 
                        v-model="form.gender"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('gender') }"> ชาย
                        <input type="radio" name="gender" value="หญิง"
                        v-model="form.gender"> หญิง
                        <span class="invalid-feedback">{{ errors.first('gender') }}</span>
                    </div>
                    {{form.gender}}
                    <div class="form-group">
                        <label for="upload">รูปภาพ</label>
                        <input type="file" name="file" ref="file" @change="fileUpload"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('file') }">  
                        <span class="invalid-feedback">{{ errors.first('file') }}</span>               
                    </div>
                    <div class="form-group">
                        <label for="news">รู้จักเว็บไซต์นี้ได้ยังไง</label>
                        <select name="news" v-model="form.news" v-validate="'required'" :class="{ 'is-invalid': errors.has('password') }">
                            <option value="">โปรดเลือก 1 ข้อ</option>
                            <option value="โฆษาในSocial Media">โฆษาในSocial Media</option>
                            <option value="เพื่อนแนะนำ">เพื่อนแนะนำ</option>
                            <option value="ค้นหาเจอในGoogle">ค้นหาเจอในGoogle</option>
                            <option value="โฆษณาผ่านเว็บต่างๆ">โฆษณาผ่านเว็บต่างๆ</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                         <span class="invalid-feedback">{{ errors.first('news') }}</span>
                    </div>
                    {{form.news}}
                    <div class="form-group">
                        <label for="agreement">ข้อตกลงและเงื่อนไข</label>
                        <div class="form-agreement">
                            <input type="checkbox" name="agreement" value="ยินยอมรับข้อตกลง"
                            v-model="form.agreement"
                            v-validate="'required'" :class="{ 'is-invalid': errors.has('password') }">
                            <label for="agreement">ยินยอมรับข้อตกลง</label>
                            <span class="invalid-feedback">{{ errors.first('agreement') }}</span>
                        </div>
                        <div class="form-agreement">
                            <input type="checkbox" name="agreement" value="ยินยอมรับข้อมูลข่าวสาร"
                            v-model="form.agreement"
                            v-validate="'required'" :class="{ 'is-invalid': errors.has('password') }">
                            <label for="agreement">ยินยอมรับข้อมูลข่าวสาร</label>
                            <span class="invalid-feedback">{{ errors.first('agreement') }}</span>
                        </div>
                        
                    </div>
                    {{form.agreement}}
                    <div class="btn">
                        <button type="submit" class="btn btn-primary">ลงทะเบียน</button>
                        <button type="button" @click="onReset" class="btn btn-danger">ล้างข้อมูล</button>
                    </div>
                    {{this.form.file}}
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Form",
    data() {
        return {
            form: {
                fname: 'Siwakorn',
                lname: 'Jindajamorn',
                tel: '123',
                email: 'bomsiwakorn@gmail.com',
                password: '123',
                gender: '',
                file: null,
                news: '',
                agreement: []
            },
            
        }
    },
    methods: {
        fileUpload() {
            console.log(this.$refs.file.files[0]);            
            this.form.file = this.$refs.file.files[0]
        },
        onSubmit() {
            this.$validator.validateAll().then(valid => {
                if(!valid) return
                // const formData = new FormData()
                // formData.append('file', this.form)
                // console.log(formData);

                    axios.post('http://192.168.100.69:1323/', this.form)
                            .then(res => {
                            console.log(res);
                            }) 

            })
            
        },
        onReset() {
            this.form = {
                fname: '',
                lname: '',
                tel: '',
                email: '',
                password: '',
                gender: '',
                news: '',
                agreement: []
            }
            this.$refs.file.value = null;
        },
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

