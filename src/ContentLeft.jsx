import './ContentLeft.css'

// eslint-disable-next-line react/prop-types
const ContentLeft = ({ onSelectContent, selectedContent }) => {
  return (
    <div className="content-left-nav">
      <div className={`item ${selectedContent === 'HOME' ? 'active' : ''}`} onClick={() => onSelectContent('HOME')}>
        <svg id="icon-home" xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"
          fill="none">
          <path
            d="M14 3.79765L21 10.1506V21.1765H18.2V12.7059H9.8V21.1765H7V10.1506L14 3.79765ZM14 0L0 12.7059H4.2V24H12.6V15.5294H15.4V24H23.8V12.7059H28L14 0Z"
            fill="#D8DBD9" />
        </svg>
        <p id="text-home">HOME</p>
      </div>
      <div className={`item ${selectedContent === 'MENU' ? 'active' : ''}`} onClick={() => onSelectContent('MENU')}>
        <svg id="icon-menu" xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"
          fill="none">
          <path
            d="M17.3756 2.66667L24.8889 9.10667V21.3333H3.11111V2.66667H17.3756ZM17.3756 0H3.11111C1.4 0 0 1.2 0 2.66667V21.3333C0 22.8 1.4 24 3.11111 24H24.8889C26.6 24 28 22.8 28 21.3333V9.10667C28 8.4 27.6733 7.72 27.0822 7.22667L19.5689 0.786667C18.9933 0.28 18.2 0 17.3756 0ZM6.22222 16H21.7778V18.6667H6.22222V16ZM6.22222 10.6667H21.7778V13.3333H6.22222V10.6667ZM6.22222 5.33333H17.1111V8H6.22222V5.33333Z"
            fill="#D8DBD9" />
        </svg>
        <p id="text-menu">MENU</p>
      </div>
      <div className={`item ${selectedContent === 'PAYMENT' ? 'active' : ''}`} onClick={() => onSelectContent('PAYMENT')}>
        <svg id="icon-payment" xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"
          fill="none">
          <path
            d="M25.2 0H2.8C1.246 0 0.014 1.335 0.014 3L0 21C0 22.665 1.246 24 2.8 24H25.2C26.754 24 28 22.665 28 21V3C28 1.335 26.754 0 25.2 0ZM25.2 21H2.8V12H25.2V21ZM25.2 6H2.8V3H25.2V6Z"
            fill="#D8DBD9" />
        </svg>
        <p id="text-payment">PAYMENT</p>
      </div>
      <div className={`item ${selectedContent === 'ORDERS' ? 'active' : ''}`} onClick={() => onSelectContent('ORDERS')}>
        <svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"
          fill="none">
          <path
            d="M0 0V24H28V0H0ZM12.4444 21.3333H3.11111V13.3333H12.4444V21.3333ZM12.4444 10.6667H3.11111V2.66667H12.4444V10.6667ZM24.8889 21.3333H15.5556V13.3333H24.8889V21.3333ZM24.8889 10.6667H15.5556V2.66667H24.8889V10.6667Z"
            fill="#D8DBD9" />
        </svg>
        <p id="text-orders">ORDERS</p>
      </div>
      <div className={`item ${selectedContent === 'SETTINGS' ? 'active' : ''}`} onClick={() => onSelectContent('SETTINGS')}>
        <svg id="icon-settings" xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24"
          fill="none">
          <path
            d="M24.697 13.176C24.7546 12.792 24.7977 12.408 24.7977 12C24.7977 11.592 24.7546 11.208 24.697 10.824L27.7339 8.844C28.0073 8.664 28.0793 8.34 27.9066 8.076L25.028 3.924C24.8985 3.732 24.6538 3.624 24.3947 3.624C24.3084 3.624 24.222 3.636 24.1501 3.66L20.5663 4.86C19.8178 4.38 19.0119 3.984 18.1339 3.684L17.587 0.504C17.5438 0.216 17.2415 0 16.8817 0H11.1246C10.7648 0 10.4626 0.216 10.4194 0.504L9.87246 3.684C8.9945 3.984 8.18851 4.392 7.44009 4.86L3.85629 3.66C3.76994 3.636 3.68358 3.624 3.59722 3.624C3.35255 3.624 3.10787 3.732 2.97834 3.924L0.0997871 8.076C-0.0873185 8.34 -0.00096187 8.664 0.2725 8.844L3.30937 10.824C3.2518 11.208 3.20862 11.604 3.20862 12C3.20862 12.396 3.2518 12.792 3.30937 13.176L0.2725 15.156C-0.00096187 15.336 -0.0729258 15.66 0.0997871 15.924L2.97834 20.076C3.10787 20.268 3.35255 20.376 3.61162 20.376C3.69797 20.376 3.78433 20.364 3.85629 20.34L7.44009 19.14C8.18851 19.62 8.9945 20.016 9.87246 20.316L10.4194 23.496C10.4626 23.784 10.7648 24 11.1246 24H16.8817C17.2415 24 17.5438 23.784 17.587 23.496L18.1339 20.316C19.0119 20.016 19.8178 19.608 20.5663 19.14L24.1501 20.34C24.2364 20.364 24.3228 20.376 24.4091 20.376C24.6538 20.376 24.8985 20.268 25.028 20.076L27.9066 15.924C28.0793 15.66 28.0073 15.336 27.7339 15.156L24.697 13.176V13.176ZM21.8472 11.124C21.9048 11.496 21.9192 11.748 21.9192 12C21.9192 12.252 21.8904 12.516 21.8472 12.876L21.6457 14.232L22.9267 15.072L24.4811 16.08L23.4736 17.532L21.6457 16.92L20.1489 16.416L18.8535 17.232C18.2346 17.616 17.6445 17.904 17.0544 18.108L15.5288 18.624L15.2985 19.98L15.0107 21.6H12.9957L12.7222 19.98L12.4919 18.624L10.9663 18.108C10.3474 17.892 9.77171 17.616 9.196 17.256L7.88626 16.416L6.36063 16.932L4.53275 17.544L3.52526 16.092L5.07968 15.084L6.36063 14.244L6.15913 12.888C6.11595 12.516 6.08717 12.24 6.08717 12C6.08717 11.76 6.11595 11.484 6.15913 11.124L6.36063 9.768L5.07968 8.928L3.52526 7.92L4.53275 6.468L6.36063 7.08L7.85748 7.584L9.15282 6.768C9.77171 6.384 10.3618 6.096 10.9519 5.892L12.4775 5.376L12.7078 4.02L12.9957 2.4H14.9963L15.2697 4.02L15.5 5.376L17.0257 5.892C17.6445 6.108 18.2203 6.384 18.796 6.744L20.1057 7.584L21.6313 7.068L23.4592 6.456L24.4667 7.908L22.9267 8.928L21.6457 9.768L21.8472 11.124ZM14.0032 7.2C10.8224 7.2 8.24608 9.348 8.24608 12C8.24608 14.652 10.8224 16.8 14.0032 16.8C17.184 16.8 19.7603 14.652 19.7603 12C19.7603 9.348 17.184 7.2 14.0032 7.2ZM14.0032 14.4C12.42 14.4 11.1246 13.32 11.1246 12C11.1246 10.68 12.42 9.6 14.0032 9.6C15.5864 9.6 16.8817 10.68 16.8817 12C16.8817 13.32 15.5864 14.4 14.0032 14.4Z"
            fill="#D8DBD9" />
        </svg>
        <p id="text-settings">SETTINGS</p>
      </div>
      <p>V.1.0</p>
    </div>
  )
}

export default ContentLeft