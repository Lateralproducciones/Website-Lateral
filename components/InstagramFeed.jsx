



export const InstagramFeed = () => {
  return (
    <div style={{ overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto' ,width: '80%', height: '600px', marginTop: '250px' }}>
      <iframe
        src={`http://lightwidget.com/widgets/${process.env.NEXT_PUBLIC_LIGHTWIDGET_ID}.html`}
        allowtransparency="true"
        className="lightwidget-widget" 
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden',
        }}
        title="Instagram Feed"
      >
      </iframe>
      {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe src="//lightwidget.com/widgets/67029692a9ed5043be096e7ef9c550b1.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe> */}
    </div>
  );
};