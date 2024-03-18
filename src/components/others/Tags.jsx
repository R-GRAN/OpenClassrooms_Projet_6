function Tags({tags}) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag" key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default Tags;