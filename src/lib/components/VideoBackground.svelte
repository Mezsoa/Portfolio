<script lang="ts">
    let { videoSrc } = $props<{ videoSrc: string }>();
    import { onMount } from 'svelte';
    
    let videoElement: HTMLVideoElement | undefined;
    
    $effect(() => {
        if (videoElement && videoSrc) {
            videoElement.load();
            videoElement.play();
        }
    });
</script>

<div class="fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
    <video
        bind:this={videoElement}
        autoplay
        loop
        muted
        playsinline
        class="absolute h-full w-full object-cover"
    >
        <source src={videoSrc} type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/50"></div>
</div>