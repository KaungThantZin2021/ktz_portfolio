<template>
    <div class="w-full h-full">
        <Navbar></Navbar>
        <div class="flex justify-center items-center w-full min-h-full">
            <div class=" w-1/2">
                <slot></slot>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
