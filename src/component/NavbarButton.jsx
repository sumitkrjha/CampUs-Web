function handleClick() {
  if (camelize(title) === "logOut") {
    // Handle the "Logout" button click
    logout();
  } else {
    navigate(path[camelize(title)]);
  }
}
