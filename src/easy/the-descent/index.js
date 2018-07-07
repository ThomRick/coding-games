while (true) {
  print(
    Array(8)
      .fill(null)
      .map((_, index) => ({
        id: index.toString(),
        height: parseInt(readline())
      }))
      .reduce(
        (previous, current) => previous.height > current.height ? previous : current
      )
      .id
  );
}
