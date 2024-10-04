



export const InstagramFeed = () => {
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '600px' }}>
      <iframe
        src={`http://lightwidget.com/widgets/${process.env.NEXT_PUBLIC_LIGHTWIDGET_ID}.html`}
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