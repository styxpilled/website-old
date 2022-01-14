<div class="slide-in" id="slide">
    <code>
        export const someText = 'some text';
    </code>
</div>


<style lang="scss">
    @use 'src/scss/variables.scss' as *;

#slide {
    position: absolute;
    // width: 6rem;
    // height: 6rem;
    padding: 2rem;
    transform: translateX(250%);
}

.slide-in {
    background: $bg-dark;
    animation: slide-ino 0.5s forwards;
}

@keyframes slide-ino {
    100% { transform: translateX(0%); 
    }
}
</style>