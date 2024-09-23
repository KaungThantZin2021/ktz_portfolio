<template>
    <div class="w-full h-full">
        <Navbar></Navbar>
        <div class="flex justify-center items-center w-full min-h-full">
            <div class="lg:w-1/2 md:w-1/2 sm:w-ful xs:w-full 2xs:w-full">
                <slot></slot>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
