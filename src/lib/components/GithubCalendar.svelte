<script lang="ts">
    import { onMount } from 'svelte';
    import 'github-calendar/dist/github-calendar-responsive.css';

let calendarDiv: HTMLElement;

onMount(async () => {
  const GitHubCalendar = (await import('github-calendar')).default;
  GitHubCalendar(calendarDiv, 'Mezsoa', {
    responsive: true
  });
});
</script>

<div class="github-calendar-wrapper">
  <div bind:this={calendarDiv} class="github-calendar" data-username="Meszoa" data-responsive>
    <div class="github-calendar-graph" data-graph-type="year"></div>
  </div>
</div>
