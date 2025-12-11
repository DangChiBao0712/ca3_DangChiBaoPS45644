<template>
    <div class="container mt-4">
        <div class="row">
            <form @submit.prevent="submitForm" class="col-sm-4">
                <h3>Thêm học sinh</h3>
                <div class="mb-3 mt-3">
                    <label for="name">Họ tên:</label>
                    <input type="text" id="name" class="form-control" v-model="student.name" required />
                </div>


                <div class="mb-3">
                    <label for="score">Toán:</label>
                    <input type="number" max="10" min="0" id="score" class="form-control" v-model="student.toan"
                        required />
                </div>

                <div class="mb-3">
                    <label for="score">Lý:</label>
                    <input type="number" max="10" min="0" id="score" class="form-control" v-model="student.ly"
                        required />
                </div>

                <div class="mb-3">
                    <label for="score">Hóa:</label>
                    <input type="number" max="10" min="0" id="score" class="form-control" v-model="student.hoa"
                        required />
                </div>

                <button type="submit" class="btn btn-success">
                    {{ isEditing ? "Cập nhật" : "Thêm" }}
                </button>
            </form>

            <div class="col-sm-8">
                <h3>Danh sách học sinh</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Điểm TB</th>
                            <th>Toán</th>

                            <th>Lý</th>
                            <th>Hóa</th>
                            <th>Xếp loại</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.score =(stu.toan + stu.ly + stu.hoa) / 3 }}</td>
                            <td>{{ stu.toan }}</td>
                            <td>{{ stu.ly }}</td>
                            <td>{{ stu.hoa }}</td>
                            <td>
                                <p v-if="stu.score <= 5.0"> Yếu</p>
                                <p v-else-if="stu.score <= 6.5"> Khá</p>
                                <p v-else-if="stu.score <= 8.5"> Giỏi</p>
                                <p v-else-if="stu.score > 8.5"> Xuất sắc</p>
                                
                            </td>
                          
                            <td>
                                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">
                                    Sửa
                                </button>
                                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const students = ref([
    { name: "Trương Văn Tân", score: 9, dob: "2005-09-25" },
    { name: "Nguyễn Văn A", score: 7, dob: "2007-08-02" },
]);

const student = ref({
    name: "",
    score: null,
    toan: null,
    ly: null,
    hoa: null,
    xeploai: "",
    
});

let isEditing = ref(false);
let editingIndex = ref(null);

function submitForm() {
    if (isEditing.value) {
        // Cập nhật hs
        students.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        // Thêm hs
        students.value.push({ ...student.value });
    }
    resetForm();
}

function editStudent(index) {
    student.value = { ...students.value[index] };
    isEditing.value = true;
    editingIndex.value = index;
}

function deleteStudent(index) {
    if (confirm("Bạn có chắc muốn xóa không?")) {
        students.value.splice(index, 1);
    }
}

function resetForm() {
    student.value = {
        name: "",
    score: null,
    toan: null,
    ly: null,
    hoa: null,
    xeploai: "",
    
    };
    isEditing.value = false;
    editingIndex.value = null;
}
</script>

<style scoped></style>