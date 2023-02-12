const CopyRight = () => {
  return (
    <p className='copyright'>
      copyright &copy; Backroads travel tours company all rights reserved
      <span id='date'>{new Date().getFullYear()}</span>
    </p>
  );
};

export default CopyRight;
