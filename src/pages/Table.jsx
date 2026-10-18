import classes from './Table.module.scss';
import bwinLogo from '@/shared/assets/bwin-logo.svg';
import starIcon from '@/shared/assets/star.svg';
import fireIcon from '@/shared/assets/fire.svg';
import rocketIcon from '@/shared/assets/rocket.svg';
import presentIcon from '@/shared/assets/present.svg';
import angleDownIcon from '@/shared/assets/angle-down.svg';
import unionpayIcon from '@/shared/assets/unionpay.svg';
import maestroIcon from '@/shared/assets/maestro.svg';
import discoverIcon from '@/shared/assets/discover.svg';
import mastercardIcon from '@/shared/assets/mastercard.svg';
import amexIcon from '@/shared/assets/amex.svg';
import maestro2Icon from '@/shared/assets/maestro2.svg';
import frame12Icon from '@/shared/assets/frame12.svg';

const paymentMethods = [
    { name: 'UnionPay', icon: unionpayIcon },
    { name: 'Mastercard', icon: mastercardIcon },
    { name: 'Discover', icon: discoverIcon },
    { name: 'Maestro', icon: maestroIcon },
    { name: 'Amex', icon: amexIcon },
    { name: 'Maestro', icon: maestro2Icon },
    { name: 'Frame12', icon: frame12Icon },
];

const features = [
    'Best odds',
    'Casino',
    '200+ Payment Method',
    'Fast Payouts',
];

export function Table() {
    return (
        <div className={classes.container}>
            <div className={classes.card}>
                {/* Header */}
                <div className={classes.header}>
                    <div className={classes.headerLeft}>
                        <span className={classes.rankNumber}>1</span>
                        <img src={fireIcon} alt="Fire" className={classes.fireIcon} />
                        <span className={classes.brandName}>BWIN</span>
                    </div>
                    <div className={classes.headerRight}>
                        <span className={classes.rating}>5.0</span>
                        <div className={classes.stars}>
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src={starIcon} alt="Star" className={classes.starIcon} />
                            ))}
                        </div>
                    </div>
                    <div className={classes.divider} />
                </div>

                {/* Content */}
                <div className={classes.content}>
                    {/* Logo */}
                    <div className={classes.logoSection}>
                        <div className={classes.logoBg}>
                            <img src={bwinLogo} alt="bwin logo" className={classes.logo} />
                        </div>
                    </div>

                    {/* Bonus Info */}
                    <div className={classes.bonusSection}>
                        <div className={classes.bonusHeader}>
                            <img src={presentIcon} alt="Present" className={classes.presentIcon} />
                            <span className={classes.bonusLabel}>Welcome bonus</span>
                        </div>
                        <h3 className={classes.bonusTitle}>100% Up to 500 $</h3>
                        <p className={classes.bonusDescription}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor, vulputate id fames pulvinar curabitur faucibus.
                        </p>
                    </div>

                    {/* Features */}
                    <div className={classes.featuresSection}>
                        {features.map((feature) => (
                            <div key={feature} className={classes.featureItem}>
                                <img src={rocketIcon} alt="Rocket" className={classes.rocketIcon} />
                                <span className={classes.featureText}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Payments */}
                    <div className={classes.paymentsSection}>
                        <div className={classes.paymentsGrid}>
                            {paymentMethods.map((method) => (
                                <div key={method.name} className={classes.paymentItem}>
                                    <div className={classes.paymentBg}>
                                        <img src={method.icon} alt={method.name} className={classes.paymentIcon} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className={classes.buttonsSection}>
                        <button className={classes.claimButton}>Claim bonus</button>
                        <button className={classes.reviewButton}>Read Review</button>
                    </div>
                </div>

                {/* More info */}
                <div className={classes.moreInfo}>
                    <div className={classes.moreInfoLine} />
                    <div className={classes.moreInfoContent}>
                        <span className={classes.moreInfoText}>More info</span>
                        <img src={angleDownIcon} alt="Down" className={classes.angleDownIcon} />
                    </div>
                    <div className={classes.moreInfoLine} />
                </div>
            </div>
        </div>
    );
}
