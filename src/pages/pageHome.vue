<template>
  <div>
    <AppHero />
    <div class="container">
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">Featured Meetups in "Location"</h1>
          <AppDropdown />
          <button class="button is-primary is-pulled-right m-r-sm">
            Create Meetups
          </button>
          PageFine
          <router-link  :to="{name: 'PageMeetupFine'}" class="button is-primary is-pulled-right m-r-sm">All</router-link>
        </div>
        <div class="row columns is-multiline">
          <!-- iterating meetup -->
          <MeetupItem
            v-for="meetup in meetups"
            :key="meetup._id"
            :meetup="meetup"
          />
        </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">Categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <!-- category -->
            <CategoryItem
              v-for="category in categories"
              :key="category._id"
              :category="category"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CategoryItem from "@/components/categoryItem";
import MeetupItem from "@/components/meetupItem";
export default {
  data() {
    return {
      categories: [],
      meetups: [],
    };
  },
  components: {
    CategoryItem,
    MeetupItem,
  },
  created() {
    axios.get("/api/v1/meetups").then((res) => {
      this.meetups = res.data;
    });
    axios.get("/api/v1/categories").then((res) => {
      this.categories = res.data;
    });
  },
};
</script>

<style scoped>
.is-rounded {
  border-radius: 10px !important;
}
</style>