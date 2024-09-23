<template>
    <div class="">
        <footer class="fixed bottom-10 left-20 right-20 flex h-16 items-center justify-between">
            <div class="flex flex-shrink-0 items-center">
                <div class="flex space-x-5">
                    <a 
                        href="https://github.com/KaungThantZin2021"
                        target="_blank"          
                        class=" text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                    >
                        <IconsGitHub/>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/kaungthantzin2022"
                        target="_blank"          
                        class=" text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                    >
                        <IconsLinkedin/>
                    </a>

                    <a 
                        href="https://www.facebook.com/profile.php?id=100072869688526"
                        target="_blank"          
                        class=" text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                    >
                        <IconsFacebook/>
                    </a>

                    <a 
                        href="https://www.instagram.com/kaungthantzin409/"
                        target="_blank"          
                        class=" text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                    >
                        <IconsInstagram/>
                    </a>

                </div>
            </div>
            <div class="flex items-center">
                <p class="text-sm font-medium">
                    Developed by 
                    <a 
                        href="https://github.com/KaungThantZin2021"
                        target="_blank"          
                        class="text-sm font-medium underline"
                    >
                        Kaung Thant Zin
                    </a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
const route = useRoute();
</script>
