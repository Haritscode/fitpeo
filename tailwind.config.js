module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-gray":"rgb(241, 242, 244)",
        "light-gray-text":"rgb(205, 209, 212)",
        "greenish":"rgb(118, 171, 140)",
        "lightgreenish":"rgb(209, 246, 224)"
      },
      backgroundImage:{
        "animatedImg":"url('/public/MainImages/anime_girl_farmer_by_craytm_ddqgqty-fullview.jpg')"
      }
    },
  },
  plugins: [],
}