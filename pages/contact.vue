<template>
    <div>
        <div>
            <h5 class="mb-2 text-2xl font-bold tracking-wider text-gray-700 dark:text-slate-200">Contact</h5>
            <ul class="list-none text-gray-600 dark:text-slate-300 font-normal space-y-3">
                <li class="flex justify-start items-center">
                    <span class="text-xl"><IconsPhone/></span>
                    <a href="tel:+959760434715" class="ms-1">+959760434715</a>
                </li>
                <li class="flex justify-start items-center">
                    <span class="text-xl"><IconsMail/></span>
                    <a href="mailto:kaungthantzin409@gmail.com" class="ms-1">kaungthantzin409@gmail.com</a>
                </li>
                <li class="flex justify-start items-center">
                    <span class="text-xl"><IconsLocation/></span>
                    <a href="https://maps.app.goo.gl/DCk8zLNpkYWVWzox9" target="_black" class="ms-1">Yangon, Myanmar</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Kaung Thant Zin | Contact',
    meta: [
    {
        name: 'description',
        content: 'This is about to contact web developer Kaung Thant Zin.'
    },
    {
        name: 'keywords',
        content: 'kaung thant zin, web developer, portfolio, +959760434715, kaungthantzin409@gmail.com, Yangon, Myanmar'
    },
    {
        property: 'og:title',                
        content: 'Kaung Thant Zin | Contact'
    },
    {
        property: 'og:description',
        content: 'This is about to contact web developer Kaung Thant Zin.'
    }
    ]
})
</script>