<script setup>
import { ref } from 'vue';
// Import hình ảnh từ thư mục assets (cần có sẵn trong dự án)
import img1 from '../assets/img/eat-clean.png';
import img2 from '../assets/img/orange_300x300.jpg';
import img3 from '../assets/img/spinach_300x300.jpg';
import img4 from '../assets/img/avatar.png';

const items = ref([

    {
        title: '8 loại rau củ quả giàu canxi',
        content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...',
        image: img1
    },
    {
        title: 'Các loại gia vị tốt cho sức khỏe',
        content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...',
        image: img2
    },
    {
        title: '9 loại đậu bổ dưỡng nên dùng nhiều',
        content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cũng nhiều vitamin...',
        image: img3
    },
    {
        image: img4
    }
]);

</script>
<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4">
                <h2 class="text-info mb-3">Về tôi</h2>
                <div class="card blog mb-4">
                    <img v-bind:src="items[3].image" class="card-img-top p-4" alt="Avatar" style="border-radius: 50%;"> 
                    <div class="card-body">
                        <h5 class="card-title">Giới thiệu bản thân</h5>
                        <p class="card-text">
                            TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập<br>
                            Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <img :src="items[0].image" alt="Hình ảnh" />
                            <div class="card-body">
                                <h3 class="card-title">{{ items[0].title }}</h3>
                                <p class="card-text">{{ items[0].content }}</p>
                                <button class="btn btn-info">Xem chi tiết </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <img :src="items[1].image" alt="Hình ảnh" />
                            <div class="card-body">
                                <h3 class="card-title">{{ items[1].title }}</h3>
                                <p class="card-text">{{ items[1].content }}</p>
                                <button class="btn btn-info">Xem chi tiết </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <img :src="items[2].image" alt="Hình ảnh" />
                            <div class="card-body">
                                <h3 class="card-title">{{ items[2].title }}</h3>
                                <p class="card-text">{{ items[2].content }}</p>
                                <button class="btn btn-info">Xem chi tiết </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped></style>