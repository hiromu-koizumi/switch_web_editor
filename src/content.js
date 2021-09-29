const isDevUrl = location.href.includes("github.dev");
let redirectUrl = "";
if (isDevUrl) {
  redirectUrl = location.href.replace("dev", "com");
} else {
  redirectUrl = location.href.replace("com", "dev");
}
document.location = redirectUrl;
