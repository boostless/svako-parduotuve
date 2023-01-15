<script setup>
import PageHeader from '../components/PageHeader.vue';
</script>

<template>
    <div class="w-full min-h-screen px-32 pb-24 bg-purple-50">
        <PageHeader title="Susisiekite su mumis" subtitle="Norėtume išgirsti jūsų nuomonę. Užpildykite šią formą." />
        <main class="w-full flex items-center justify-center">
            <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </main>   
    </div>
</template>