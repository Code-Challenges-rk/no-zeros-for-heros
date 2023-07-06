def no_boring_zeros(n)
  # Convert the number to a string
  number_string = n.to_s

  # Iterate from the end of the string and remove trailing zeros
  i = number_string.length - 1
  while i > 0 && number_string[i] == "0"
    i -= 1
  end

  # Return the number without trailing zeros and convert it back to an integer
  result_string = number_string[0..i]
  result_string.to_i
end

puts no_boring_zeros(960)
