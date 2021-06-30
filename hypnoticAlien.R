library(spiro)


c(
  spiro(
    fixed_radius = 43,
    cycling_radius = 91,
    pen_radius = 65,
    file = "asdf2.svg",
    transparency = 0.8,
    draw_fills = F,
    colors = "#0cc245",
    points_per_polygon = 5000,
  ),
  spiro(
    fixed_radius = 13,
    points_per_polygon = 5000,
    cycling_radius = 17,
    pen_radius = 31,
    file = "asdf.svg",
    colors = "#63038c",
    transparency = .76
  )
) %>%
  image_merge(output = "hypnoticalience.svg") %>%
  image_spin(rpm = c(2,-3)) %>%
  add_background()

spiro(4, 7, 11, file = "pictureframe.svg", color_groups = 16, transparency = .3)

spiro(1, 26, 77, file = "asdf.svg", color_cycles = 1, colors = "#061f63") 
