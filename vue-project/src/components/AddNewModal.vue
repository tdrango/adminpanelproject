<template>
<div class="modal-overlay" @click="closeModal">
    <div class="modal border-radius-10" @click.stop>
      <slot name="header">
          <div class="bg-primary p-20 text-white border-radius-top-10">
            <button @click="closeModal" class="close-btn text-white">x</button>
          </div>
        </slot>
        <slot></slot>
        <slot name="footer">
        </slot>
    </div>
</div>
</template>
  
<script setup>
import useMainStore from '../stores/store';
const mainStore = useMainStore();


const closeModal = () => {
  mainStore.$patch({ isAddNewModalOpen: false });
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: #fff;
  position: relative;
  min-width: 450px;
  
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
}

.modal-header {
  width: 100%;
}
</style>
  
  