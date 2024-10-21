



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
    </div>
  );
};