Installing Huhi
################

Linux
*****

Huhi is only supported on 64-bit AMD/Intel architectures (`amd64` / `x86_64`).

The current signing keys are also available from <https://huhisoft.com/signing-keys/>.

Release Channel Installation
============================

.. highlight:: console

Debian 9+, Ubuntu 14.04+ and Mint 17+
-------------------------------------

If you get ``gnutls_handshake()`` errors after adding the Huhi repository on Debian 9,
you may need to `uninstall old conflicting packages
<https://github.com/signalapp/Signal-Desktop/issues/2483#issuecomment-401047201>`_.

::

    sudo apt install apt-transport-https curl

    curl -s https://huhisoft.com/huhi-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/huhi-browser-release.gpg add -

    echo "deb [arch=amd64] https://huhisoft.com/ stable main" | sudo tee /etc/apt/sources.list.d/huhi-browser-release.list

    sudo apt update

    sudo apt install huhi-browser

Fedora 28+, CentOS/RHEL 8+
--------------------------
::

    sudo dnf install dnf-plugins-core

    sudo dnf config-manager --add-repo https://huhisoft.com/x86_64/

    sudo rpm --import https://huhisoft.com/huhi-core.asc

    sudo dnf install huhi-browser

OpenSUSE 15+
------------
::

    sudo zypper install curl

    sudo rpm --import https://huhisoft.com/huhi-core.asc

    sudo zypper addrepo https://huhisoft.com/x86_64/ huhi-browser

    sudo zypper install huhi-browser


Beta Channel Installation
=========================

.. highlight:: console

Debian 9+, Ubuntu 14.04+ and Mint 17+
-------------------------------------
::

    sudo apt install apt-transport-https curl

    curl -s https://huhisoft.com/huhi-core-nightly.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/huhi-browser-prerelease.gpg add -

    echo "deb [arch=amd64] https://huhisoft.com/ stable main" | sudo tee /etc/apt/sources.list.d/huhi-browser-beta.list

    sudo apt update

    sudo apt install huhi-browser-beta

Fedora 28+, CentOS/RHEL 8+
--------------------------
::

    sudo dnf install dnf-plugins-core

    sudo dnf config-manager --add-repo https://huhisoft.com/x86_64/

    sudo rpm --import https://huhisoft.com/huhi-core-nightly.asc

    sudo dnf install huhi-browser-beta

OpenSUSE 15+
------------
::

    sudo zypper install curl

    sudo rpm --import https://huhisoft.com/huhi-core-nightly.asc

    sudo zypper addrepo https://huhisoft.com/x86_64/ huhi-browser-beta

    sudo zypper install huhi-browser-beta


Nightly Channel Installation
============================

.. highlight:: console

Debian 9+, Ubuntu 14.04+ and Mint 17+
-------------------------------------
::

    sudo apt install apt-transport-https curl

    curl -s https://huhisoft.com/huhi-core-nightly.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/huhi-browser-prerelease.gpg add -

    echo "deb [arch=amd64] https://huhisoft.com/ stable main" | sudo tee /etc/apt/sources.list.d/huhi-browser-nightly.list

    sudo apt update

    sudo apt install huhi-browser-nightly

Fedora 28+, CentOS/RHEL 8+
--------------------------
::

    sudo dnf install dnf-plugins-core

    sudo dnf config-manager --add-repo https://huhisoft.com/x86_64/

    sudo rpm --import https://huhisoft.com/huhi-core-nightly.asc

    sudo dnf install huhi-browser-nightly

OpenSUSE 15+
------------
::

    sudo zypper install curl

    sudo rpm --import https://huhisoft.com/huhi-core-nightly.asc

    sudo zypper addrepo https://huhisoft.com/x86_64/ huhi-browser-nightly

    sudo zypper install huhi-browser-nightly


Unofficial packages
============================

NOTE: While we recommend you to use our official packages, there's a section for unofficial package in the case where we don't ship packages for your distribution. These packages are community maintained, and therefore we take no responsibility for them.

.. highlight:: console

Manjaro
------------
::

    sudo pacman -S huhi
    sudo pacman -S huhi-beta

Arch
-----------
The Arch package is available as ``huhi-bin`` in the Arch User Repository. To install it, you'll need to use an AUR helper, such as ``yay``.

::

    yay -S huhi-bin

The Arch Linux wiki contains a `comparison of common AUR helpers
<https://wiki.archlinux.org/index.php/AUR_helpers>`_.

Solus 
-----------
::

    sudo eopkg it huhi
    
The Solus
package is a repackaging of the .deb file in to the Solus software format (.eopkg). It is currently maintained by Jacalz.
