<template>
    <div id="form">
        <div class="container">
            <header>Register</header>
            <form action="">
                    <div class="form-group">
                        <label for="fname">ชื่อ</label>
                        <input class="form-control" type="text" name="fname">
                    </div>
                    <div class="form-group">
                        <label for="lname">นามสกุล</label>
                        <input class="form-control" type="text" name="lname">
                    </div>
                    <div class="form-group">
                        <label for="tel">เบอร์โทร</label>
                        <input class="form-control" type="tel" name="tel">
                    </div>
                    <div class="form-group">
                        <label for="email">อีเมล</label>
                        <input class="form-control" type="email" name="email">
                    </div>
                    <div class="form-group">
                        <label for="password">รหัสผ่าน</label>
                        <input class="form-control" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label for="gender">เพศ</label>
                        <input type="radio" name="gender" value="ชาย"> ชาย
                        <input type="radio" name="gender" value="ชาย"> หญิง
                    </div>
                    <div class="form-group">
                        <label for="upload">รูปภาพ</label>
                        <input type="file" name="upload">
                    </div>
                    <div class="form-group">
                        <label for="news">รู้จักเว็บไซต์นี้ได้ยังไง</label>
                        <select name="news">
                            <option value="">โปรดเลือก 1 ข้อ</option>
                            <option value="โฆษาในSocial Media">โฆษาในSocial Media</option>
                            <option value="เพื่อนแนะนำ">เพื่อนแนะนำ</option>
                            <option value="ค้นหาเจอในGoogle">ค้นหาเจอในGoogle</option>
                            <option value="โฆษณาผ่านเว็บต่างๆ">โฆษณาผ่านเว็บต่างๆ</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="agreement">ข้อตกลงและเงื่อนไข</label>
                        <input type="checkbox" name="agreement" value="ยินยอมรับข้อตกลง">
                        <label for="agreement">ยินยอมรับข้อตกลง</label>
                        <input type="checkbox" name="agreement" value="ยินยอมรับข้อมูลข่าวสาร">
                        <label for="agreement">ยินยอมรับข้อมูลข่าวสาร</label>
                    </div>
                    <div class="btn">
                        <button type="submit" class="btn btn-primary">ลงทะเบียน</button>
                        <button type="button" class="btn btn-danger">ล้างข้อมูล</button>
                    </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: 500px;
    }
    header {
        text-align: center;
        font-size: 2rem;
    }
</style>

