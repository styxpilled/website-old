<script lang="ts">
	import { linear, quadIn } from 'svelte/easing';
	import { draw, scale, fade } from 'svelte/transition';
</script>

<section>
	<div class="box" 
    out:fade={{ duration: 400 }} >
        <svg id="s" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.42 114.03">
            <g stroke-width="1.3" fill="none">
                <!-- ST -->
                <path
                    id="logo"
                    pathLength="100"
                    d="M54.45,22.85V0H70.08V22.85H86V36.57H70.08V91.82H54.45V36.57H24.26a6.65,6.65,0,0,0-4.77,1.75,5.08,5.08,0,0,0-1.44,3.52,4.33,4.33,0,0,0,2.21,3.82c1,.64,1.92,1,5.27,2.72l8,4c3.52,1.75,6.87,3.52,9.42,6.24a16.52,16.52,0,0,1,5,12.45A22.38,22.38,0,0,1,42,86.39c-5.26,5.74-11.84,7.51-18.85,7.51-4.29,0-9.73-.67-14.53-4.32A26.56,26.56,0,0,1,0,77.3l12.78-6.07c.77,2.21,2.22,5.09,3.66,6.37a9.56,9.56,0,0,0,6.88,2.55,9.58,9.58,0,0,0,6.37-2.21,8,8,0,0,0,2.25-5.27,7.25,7.25,0,0,0-2.08-5.13,20.37,20.37,0,0,0-6.71-4.13l-5.74-2.72c-3.05-1.44-6.71-3.22-9.26-5.77A14.61,14.61,0,0,1,3.36,43.58,21.09,21.09,0,0,1,8.93,29.22c2.91-3,7.68-6.07,15.33-6.34Z"
                    transform="translate(0 0)"
                    style="animation-delay: {3}s;"
                />
                <!-- Y -->
                <path
                    id="logo"
                    pathLength="100"
                    d="M129.89,0,112.68,34.72,95.74,0H79.07L104.5,50.12,82.59,91.79H98.12L145.46,0Z"
                    transform="translate(0 0)"
                    style="animation-delay: {3+3.6}s;"
                />
                <!-- X -->
                <path
                    id="logo"
                    pathLength="100"
                    d="M137,63.91l21.87-41.67H143.36L96.06,114h15.53L128.8,79.31l17,34.72h16.64Z"
                    transform="translate(0 0)"
                    style="animation-delay: {3+7.4}s;"
                />
            </g>
        </svg>
	</div>
</section>

<style lang="scss">
    @use 'src/scss/variables.scss' as *;
    
    section {
        display: flex;
        justify-content: center;
        align-items: center;
    }


	#logo {
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
		animation-name: sign, cool;
        animation-duration: 4s, 6s;
        animation-delay: 0ms, 1s;
        animation-timing-function: ease, ease;
        animation-iteration-count: 1, 1;
        animation-fill-mode: forwards, forwards;
	}

	@keyframes sign {
		to {
			stroke-dashoffset: 0;
		}
	}

    @keyframes cool {
        0% {
            stroke: #fdd996;
            fill-opacity: 100%;
            fill: $primary-fg;
        }
        100% {
            stroke: #303032;
            fill-opacity: 100%;
            fill: $primary-fg;
        }
    }

	svg {
		margin: 0%;
		max-height: 40%;
		max-width: 50%;
	}

	.box {
		position: relative;
		background: $bg;
		height: 30rem;
		width: 30rem;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;

        animation: set 20s ease 1ms 1 forwards;
		&:after {
			content: '';
			position: absolute;
			height: 200%;
			width: 200%;
			background-color: $bg;
			border-radius: 35%; /* Smooth edges to appear like liquid */
			animation: spin 4s ease-in-out forwards; /* Set to forwards to freeze on last frame */
		}
	}
	@keyframes spin {
		0% {
			transform: translateY(0) rotate(0deg);
		}
		100% {
			transform: translateY(-100%) rotate(400deg);
		}
	}

    @keyframes set {
        0% {
            background-color: $primary-fg;
        }
        80% {
            background-color: $primary-fg;
        }
        100% {
            background-color: rgba($bg, 0);
        }
    }
</style>
